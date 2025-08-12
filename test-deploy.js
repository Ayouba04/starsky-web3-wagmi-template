// Simple test script to verify deployment setup
const { spawn } = require('child_process');
const path = require('path');

console.log('🧪 Testing Web3 deployment setup...\n');

// Test 1: Check if hardhat is installed
console.log('1️⃣ Checking Hardhat installation...');
const hardhatTest = spawn('npx', ['hardhat', '--version'], {
  cwd: __dirname,
  shell: process.platform === 'win32'
});

hardhatTest.stdout.on('data', (data) => {
  console.log('✅ Hardhat version:', data.toString().trim());
});

hardhatTest.stderr.on('data', (data) => {
  console.error('❌ Hardhat error:', data.toString());
});

hardhatTest.on('close', (code) => {
  if (code === 0) {
    console.log('✅ Hardhat is properly installed\n');
    
    // Test 2: Try to compile contracts
    console.log('2️⃣ Testing contract compilation...');
    const compileTest = spawn('npx', ['hardhat', 'compile'], {
      cwd: __dirname,
      shell: process.platform === 'win32'
    });
    
    compileTest.stdout.on('data', (data) => {
      console.log(data.toString());
    });
    
    compileTest.stderr.on('data', (data) => {
      console.error(data.toString());
    });
    
    compileTest.on('close', (compileCode) => {
      if (compileCode === 0) {
        console.log('✅ Contract compilation successful\n');
        console.log('🎉 Web3 template is ready for deployment!');
        console.log('\nNext steps:');
        console.log('1. Add your environment variables to .env.local');
        console.log('2. Use the Deploy button in the chat interface');
        console.log('3. Or run: npm run hardhat:deploy');
      } else {
        console.log('❌ Contract compilation failed');
      }
    });
    
  } else {
    console.log('❌ Hardhat installation issue');
  }
});
