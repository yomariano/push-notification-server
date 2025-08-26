#!/usr/bin/env node
// Generate VAPID keys for Web Push notifications
import webpush from 'web-push';

console.log('🔑 Generating new VAPID keys for Web Push notifications...\n');

const vapidKeys = webpush.generateVAPIDKeys();

console.log('✅ VAPID keys generated successfully!\n');
console.log('📋 Copy these keys to your environment variables:\n');
console.log('Public Key (for frontend):');
console.log(`VAPID_PUBLIC_KEY=${vapidKeys.publicKey}\n`);
console.log('Private Key (for backend - KEEP SECRET):');
console.log(`VAPID_PRIVATE_KEY=${vapidKeys.privateKey}\n`);
console.log('📝 Add these to your Coolify environment variables:');
console.log('   - Frontend: VITE_VAPID_PUBLIC_KEY');
console.log('   - Backend: VAPID_PRIVATE_KEY\n');
console.log('⚠️  Important: Keep the private key secure and never expose it publicly!');