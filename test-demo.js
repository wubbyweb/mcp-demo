#!/usr/bin/env node

import { spawn } from 'child_process';
import { setTimeout } from 'timers/promises';

console.log('🚀 Testing MCP Demo Project\n');

// Test 1: Verify build works
console.log('📦 Testing build...');
const buildResult = spawn('npm', ['run', 'build'], { stdio: 'inherit' });
await new Promise((resolve, reject) => {
  buildResult.on('close', (code) => {
    if (code === 0) {
      console.log('✅ Build successful\n');
      resolve();
    } else {
      console.log('❌ Build failed\n');
      reject(new Error(`Build failed with code ${code}`));
    }
  });
});

// Test 2: Test TypeScript compilation
console.log('🔍 Testing TypeScript...');
const typeResult = spawn('npm', ['run', 'typecheck'], { stdio: 'inherit' });
await new Promise((resolve, reject) => {
  typeResult.on('close', (code) => {
    if (code === 0) {
      console.log('✅ TypeScript check successful\n');
      resolve();
    } else {
      console.log('❌ TypeScript check failed\n');
      reject(new Error(`TypeScript check failed with code ${code}`));
    }
  });
});

// Test 3: Start SSE server for testing
console.log('🌐 Starting SSE server...');
const sseServer = spawn('npm', ['run', 'start:sse'], { 
  stdio: ['pipe', 'pipe', 'inherit'],
  detached: false 
});

// Wait for server to start
await setTimeout(2000);

// Test 4: Test health endpoint
console.log('🏥 Testing health endpoint...');
try {
  const response = await fetch('http://localhost:3000/health');
  if (response.ok) {
    const health = await response.json();
    console.log('✅ Health check passed:', health);
  } else {
    console.log('❌ Health check failed:', response.status);
  }
} catch (error) {
  console.log('❌ Health check error:', error.message);
}

// Cleanup
console.log('\n🧹 Cleaning up...');
sseServer.kill('SIGTERM');

console.log('\n🎉 Demo tests completed!');
console.log('\n📋 Manual testing commands:');
console.log('   npm run demo:stdio  # Test STDIO mode');
console.log('   npm run demo:sse    # Test SSE mode');
console.log('   npm run start:sse   # Start SSE server');
console.log('   npm run client:sse  # Run SSE client');