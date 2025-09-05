#!/bin/bash

# Portfolio Website Deployment Script
# This script builds and deploys the portfolio to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

# Export static files
echo "📤 Exporting static files..."
npm run export

# Check if export was successful
if [ ! -d "out" ]; then
    echo "❌ Error: Export failed. 'out' directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"
echo "📁 Static files are ready in the 'out' directory"
echo ""
echo "🌐 To deploy to GitHub Pages:"
echo "1. Copy the contents of the 'out' directory to your GitHub Pages repository"
echo "2. Or use GitHub Actions for automatic deployment"
echo ""
echo "📋 Next steps:"
echo "- Update your GitHub repository settings to use GitHub Pages"
echo "- Set the source to the 'out' directory or main branch"
echo "- Your portfolio will be available at: https://mkljngd.github.io"
