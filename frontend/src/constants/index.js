let baseURLL = process.env.REACT_APP_SERVER_HOSTNAME
baseURLL = typeof baseURLL === 'string' && baseURLL.replace(/^"|"$/g, '')

const baseURL = baseURLL || "https://ecom-service-vwki.onrender.com"  

export default baseURL;