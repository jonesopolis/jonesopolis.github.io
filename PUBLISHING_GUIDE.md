# Publishing Blog Posts to Contentful

This document outlines the complete workflow for publishing blog posts to Contentful's Preview API.

## Prerequisites

### 1. Contentful Account Setup

You need a Contentful account with:
- A Space ID
- A Management API Token (with write access)
- Content model for `blogPost` and `tag` content types

### 2. Environment Variables

Create a `.env` file in the project root with:

```env
# Required for publishing posts
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_MANAGEMENT_TOKEN=your_management_api_token_here

# Optional - defaults to 'master' if not specified
CONTENTFUL_ENVIRONMENT=master

# Required for reading posts (Delivery API - for the React app)
VITE_CONTENTFUL_ACCESS_TOKEN=your_delivery_api_token_here
```

### 3. Getting Your Credentials

1. **Space ID**: 
   - Go to https://app.contentful.com/
   - Select your space
   - Go to Settings → General Settings
   - Copy the Space ID

2. **Management Token**:
   - Go to Settings → API keys
   - Click on "Content management tokens" tab
   - Click "Generate personal token"
   - Name it (e.g., "Blog Publishing Script")
   - Copy the token (you won't see it again!)

3. **Delivery API Token** (for the React app):
   - Go to Settings → API keys
   - Select or create an API key
   - Copy the "Content Delivery API - access token"

## Publishing Workflow

### Step 1: Create Your Post Content

Create a JSON file with your blog post data. See `silly-recipe-post.json` as an example:

```json
{
  "title": "Your Post Title",
  "slug": "your-post-slug",
  "excerpt": "A brief description (max 300 chars)",
  "publishDate": "2026-01-31",
  "publish": false,
  "metaTitle": "SEO Title (max 60 chars)",
  "metaDescription": "SEO description (max 160 chars)",
  "tags": [
    {
      "name": "Tag Name",
      "slug": "tag-slug"
    }
  ],
  "content": {
    "nodeType": "document",
    "data": {},
    "content": [
      {
        "nodeType": "paragraph",
        "data": {},
        "content": [
          {
            "nodeType": "text",
            "value": "Your content here...",
            "marks": [],
            "data": {}
          }
        ]
      }
    ]
  }
}
```

### Step 2: Run the Publishing Script

```bash
node publish-post.js <your-post-file.json>
```

Example:
```bash
node publish-post.js silly-recipe-post.json
```

### Step 3: What Happens During Publishing

The script will:

1. **Connect to Contentful Management API**
   - Authenticates using your Management Token
   - Accesses the specified Space and Environment

2. **Process Tags**
   - For each tag in your post:
     - Checks if the tag already exists (by slug)
     - Creates and publishes the tag if it doesn't exist
     - Returns the tag reference for linking

3. **Create the Blog Post Entry**
   - Checks if a post with the same slug exists
   - Creates a new entry with all fields
   - Links the tags to the post
   - Leaves the post in **Draft** state if `publish: false`

4. **Output Results**
   - Shows the Entry ID
   - Provides a link to view in Contentful
   - Confirms draft/published status

### Step 4: Preview API Access

When `publish: false` (the default), your post is created in **Draft** mode. This means:

- ✅ It's accessible via the **Preview API**
- ❌ It's NOT accessible via the **Delivery API** (production)
- 🔍 You can view it in the Contentful web app
- 🧪 Perfect for testing and review before publishing

To access draft entries in your React app, you would need to:
1. Use the Preview API token instead of Delivery API token
2. Use the preview endpoint: `preview.contentful.com` instead of `cdn.contentful.com`

### Step 5: Publishing to Production (Optional)

If you want to publish immediately, set `"publish": true` in your JSON file, or:

1. Go to https://app.contentful.com/
2. Navigate to Content → your post
3. Click "Publish" button

## Rich Text Content Structure

The `content` field uses Contentful's Rich Text format. Here are common node types:

### Headings
```json
{
  "nodeType": "heading-2",
  "content": [
    {
      "nodeType": "text",
      "value": "Your Heading"
    }
  ]
}
```

### Paragraphs
```json
{
  "nodeType": "paragraph",
  "content": [
    {
      "nodeType": "text",
      "value": "Your text here",
      "marks": []
    }
  ]
}
```

### Text with Formatting
```json
{
  "nodeType": "text",
  "value": "Bold text",
  "marks": [
    {
      "type": "bold"
    }
  ]
}
```

Available marks: `bold`, `italic`, `underline`, `code`

### Lists (Unordered)
```json
{
  "nodeType": "unordered-list",
  "content": [
    {
      "nodeType": "list-item",
      "content": [
        {
          "nodeType": "paragraph",
          "content": [
            {
              "nodeType": "text",
              "value": "List item text"
            }
          ]
        }
      ]
    }
  ]
}
```

### Lists (Ordered)
Same as unordered, but use `"nodeType": "ordered-list"`

## Troubleshooting

### "Missing required environment variables"
- Make sure you have a `.env` file in the project root
- Verify `CONTENTFUL_SPACE_ID` and `CONTENTFUL_MANAGEMENT_TOKEN` are set

### "Post with slug X already exists"
- Each slug must be unique
- Either use a different slug or delete the existing post

### "Unauthorized" or "Access denied"
- Check that your Management Token is valid
- Ensure the token has write permissions
- Verify the Space ID is correct

### "Entry validation failed"
- Check that all required fields are provided
- Ensure field formats match the content model
- Verify Rich Text structure is valid

## Example: The Silly Recipe Post

The included `silly-recipe-post.json` demonstrates:
- ✅ Complete Rich Text structure
- ✅ Multiple heading levels
- ✅ Bold and italic text
- ✅ Ordered and unordered lists
- ✅ Tag creation and linking
- ✅ SEO meta fields
- ✅ Draft mode publishing

Run it with:
```bash
node publish-post.js silly-recipe-post.json
```

Then check your Contentful space - you should see:
1. New tags: "Recipes", "Culinary Arts", "Silly"
2. New blog post entry in Draft status
3. The post is ready to preview!

## Next Steps

After publishing:
1. View your post in Contentful web app
2. Make any edits if needed
3. Test with Preview API in your React app
4. Click "Publish" when ready for production
5. View on your live site!

Happy publishing! 🚀
