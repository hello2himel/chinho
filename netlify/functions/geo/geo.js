// netlify/functions/geo/geo.js

exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return { statusCode: 405, headers, body: 'Method Not Allowed' };
  }

  try {
    // Use ipapi.co (free, no API key, CORS not needed because it's server-side)
    const response = await fetch('https://ipapi.co/json/');
    
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }
    
    const geoData = await response.json();

    // Mask IP address before sending to frontend
    let maskedIp = geoData.ip;
    if (maskedIp) {
      const parts = maskedIp.split('.');
      if (parts.length === 4) {
        maskedIp = `${parts[0]}.xxx.xxx.${parts[3]}`;
      }
    }

    return {
      statusCode: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        success: true,
        city: geoData.city,
        region: geoData.region,
        country_name: geoData.country_name,
        org: geoData.org,
        ip: maskedIp,
      }),
    };
  } catch (error) {
    console.error('Geolocation function error:', error);
    return {
      statusCode: 500,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: false, error: 'Failed to fetch location' }),
    };
  }
};