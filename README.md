# Push Notification Server

Dedicated backend API server for handling push notifications with OneSignal integration and Web Push API support.

## Features

- ✅ **OneSignal Integration** - Send notifications via OneSignal REST API
- ✅ **Web Push API** - Direct browser push notifications with VAPID
- ✅ **Trading Signals** - Conditional notifications for trading algorithms
- ✅ **Price Alerts** - Automated price-based notifications
- ✅ **Market Events** - Severity-filtered market news notifications
- ✅ **Broadcast Support** - Send to all users or specific targets
- ✅ **CORS Enabled** - Works with frontend at react.signalstrading.app

## API Endpoints

### Health & Configuration
- `GET /api/health` - Server health check and configuration
- `GET /api/vapid-key` - Get VAPID public key for frontend

### Web Push API
- `POST /api/subscribe` - Save Web Push subscription
- `POST /api/send-notification` - Send Web Push notification
- `GET /api/subscriptions` - View active subscriptions
- `DELETE /api/subscriptions` - Clear all subscriptions

### OneSignal
- `POST /api/onesignal-send` - Send to specific OneSignal user
- `POST /api/onesignal-broadcast` - Broadcast to all OneSignal users

### Conditional Notifications
- `POST /api/trading-signal` - Send trading signal (confidence >= 75%)
- `POST /api/price-alert` - Send price alert (when conditions met)
- `POST /api/market-event` - Send market event (severity >= normal)

## Environment Variables

```bash
# VAPID Keys for Web Push
VAPID_PUBLIC_KEY=your_vapid_public_key
VAPID_PRIVATE_KEY=your_vapid_private_key

# OneSignal Configuration  
ONESIGNAL_API_KEY=your_onesignal_api_key

# Server Configuration
PORT=3000
NODE_ENV=production
```

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## Docker Deployment

```bash
# Build image
docker build -t push-notification-server .

# Run container
docker run -p 3000:3000 \
  -e VAPID_PRIVATE_KEY=your_key \
  -e ONESIGNAL_API_KEY=your_key \
  push-notification-server
```

## Usage Examples

### Trading Signal
```javascript
fetch('https://server.signalstrading.app/api/trading-signal', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    symbol: 'AAPL',
    price: 150.25,
    action: 'BUY',
    confidence: 85,
    stopLoss: 145.00,
    takeProfit: 160.00
  })
});
```

### Price Alert
```javascript
fetch('https://server.signalstrading.app/api/price-alert', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    symbol: 'BTC',
    currentPrice: 52000,
    targetPrice: 50000,
    alertType: 'above'
  })
});
```

### Broadcast Notification
```javascript
fetch('https://server.signalstrading.app/api/onesignal-broadcast', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Market Alert',
    message: 'Important trading update',
    data: { priority: 'high' }
  })
});
```

## Architecture

This server is designed to work with:
- **Frontend**: `https://react.signalstrading.app` (React app)
- **Backend**: `https://server.signalstrading.app` (this server)

The server handles all push notification logic while the frontend provides the user interface and subscription management.