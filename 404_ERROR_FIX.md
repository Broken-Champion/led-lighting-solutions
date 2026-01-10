# 🔧 404 ERROR FIX - Apache + React Router SPA Configuration

**Date Fixed:** January 2, 2026  
**Issue:** Website throws 404 errors on all routes except homepage  
**Root Cause:** Missing SPA routing configuration in Apache  
**Status:** ✅ RESOLVED

---

## 🎯 PROBLEM DIAGNOSIS

### **Symptoms:**
- ✅ Homepage (`/`) loads correctly
- ❌ `/products` returns 404 Not Found
- ❌ `/about` returns 404 Not Found
- ❌ `/services` returns 404 Not Found
- ❌ All other routes return 404

### **Root Cause:**
**React Router uses client-side routing (BrowserRouter)**, but Apache was configured to look for **physical files** at each URL path.

When a user navigates to `/products`:
1. Browser requests: `GET /products`
2. Apache looks for: `/var/www/ledlightingsolutionsus.com/html/products` (file or directory)
3. File doesn't exist → Apache returns **404 Not Found**
4. React Router never gets a chance to handle the route

### **Why This Happens:**
- **Single Page Applications (SPAs)** have only ONE HTML file: `index.html`
- **All routing is handled by JavaScript** (React Router) in the browser
- **Server must redirect ALL routes** to `index.html` so React Router can take over

---

## ✅ THE SOLUTION

### **Apache .htaccess Configuration:**
Created `.htaccess` file in the web root with SPA rewrite rules:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html to allow React Router to handle routing
  RewriteRule ^ index.html [L]
</IfModule>
```

### **How It Works:**
1. **Check if request is for an actual file** (`!-f` = not a file)
2. **Check if request is for an actual directory** (`!-d` = not a directory)
3. **If neither exists, serve `index.html` instead**
4. **React Router loads and handles the route in JavaScript**

### **What Gets Rewritten:**
- `/` → `index.html` ✅
- `/products` → `index.html` (React Router shows Products page) ✅
- `/about` → `index.html` (React Router shows About page) ✅
- `/services` → `index.html` (React Router shows Services page) ✅
- `/contact` → `index.html` (React Router shows Contact page) ✅
- `/quote` → `index.html` (React Router shows Quote page) ✅
- `/invalid-route` → `index.html` (React Router shows 404 page) ✅

### **What DOESN'T Get Rewritten:**
- `/assets/index-CjV_SCq2.css` → Actual CSS file ✅
- `/assets/index-d_a8QoAf.js` → Actual JS file ✅
- `/assets/led-logo-ibFCeC2z.png` → Actual image ✅
- `/sitemap.xml` → Actual XML file ✅
- `/robots.txt` → Actual text file ✅

---

## 📂 FILE LOCATIONS

### **Production (Currently Active):**
```bash
/var/www/ledlightingsolutionsus.com/html/.htaccess
```
- **Status:** ✅ Deployed and working
- **Purpose:** Active configuration serving live traffic

### **Source (For Future Builds):**
```bash
/var/www/ledlightingsolutionsus.com/app/public/.htaccess
```
- **Status:** ✅ Added to repository
- **Purpose:** Vite copies files from `public/` to `dist/` during build
- **Benefit:** Future builds will automatically include `.htaccess`

### **Build Process:**
```bash
npm run build
# Vite copies public/.htaccess to dist/.htaccess

cp -r dist/* html/
# Deployment includes .htaccess automatically
```

---

## 🧪 VERIFICATION TESTS

### **Test Results:**
```bash
# Test route redirects
curl -I http://localhost/products
# Result: HTTP/1.1 200 OK (returns index.html) ✅

curl -I http://localhost/about
# Result: HTTP/1.1 200 OK (returns index.html) ✅

# Test actual files are NOT redirected
curl -I http://localhost/assets/index-CjV_SCq2.css
# Result: HTTP/1.1 200 OK (returns actual CSS file) ✅
```

### **Manual Browser Tests:**
- ✅ Visit `https://ledlightingsolutionsus.com/` → Home page loads
- ✅ Visit `https://ledlightingsolutionsus.com/products` → Products page loads (no 404)
- ✅ Visit `https://ledlightingsolutionsus.com/about` → About page loads (no 404)
- ✅ Click navbar links → Navigation works
- ✅ Refresh page while on `/products` → Stays on Products page (doesn't 404)
- ✅ Direct URL entry → Any route loads correctly

---

## 🔒 APACHE REQUIREMENTS

### **Prerequisites (Already Met):**

1. **mod_rewrite Module Enabled:**
   ```bash
   apache2ctl -M | grep rewrite
   # Output: rewrite_module (shared) ✅
   ```

2. **AllowOverride All in Virtual Host:**
   ```apache
   <Directory /var/www/ledlightingsolutionsus.com/html>
       Options Indexes FollowSymLinks
       AllowOverride All  # Required for .htaccess to work ✅
       Require all granted
   </Directory>
   ```

3. **Virtual Host Configuration:**
   - HTTP (port 80): `/etc/apache2/sites-available/ledlightingsolutionsus.com.conf`
   - HTTPS (port 443): `/etc/apache2/sites-available/ledlightingsolutionsus.com-le-ssl.conf`
   - Both have `AllowOverride All` enabled ✅

---

## 📚 TECHNICAL DETAILS

### **React Router Configuration:**
```typescript
// App.tsx uses BrowserRouter (client-side routing)
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/quote" element={<Quote />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

### **SPA Routing Flow:**
1. User requests: `https://ledlightingsolutionsus.com/products`
2. Apache receives request
3. `.htaccess` checks: "Is `/products` a file?" → No
4. `.htaccess` checks: "Is `/products` a directory?" → No
5. `.htaccess` rewrites to: `index.html`
6. Browser receives `index.html` with React app
7. React Router reads URL: `/products`
8. React Router renders: `<Products />` component
9. User sees: Products page (no 404!)

### **URL Appearance:**
- ✅ Clean URLs: `ledlightingsolutionsus.com/products` (no `#` hash)
- ✅ Browser history works (back/forward buttons)
- ✅ Shareable URLs (each route has unique URL)
- ✅ SEO friendly (search engines can index each route)

---

## 🚨 COMMON MISTAKES TO AVOID

### **❌ Wrong: Using HashRouter**
```typescript
// This works without .htaccess but URLs look ugly
<HashRouter> {/* URLs: /#/products */}
```
**Why wrong:** URLs look unprofessional (`/#/products`), poor SEO

### **❌ Wrong: Missing RewriteCond checks**
```apache
# This would redirect EVERYTHING, breaking CSS/JS/images
RewriteRule ^ index.html [L]
```
**Why wrong:** CSS, JS, and images would also redirect to `index.html`

### **❌ Wrong: Only configuring HTTP virtual host**
```apache
# Port 80 gets redirected to HTTPS, so HTTPS config matters more
```
**Why wrong:** All traffic goes through HTTPS (port 443), HTTP (port 80) just redirects

### **✅ Correct: Full .htaccess with file/directory checks**
```apache
RewriteCond %{REQUEST_FILENAME} !-f  # Don't rewrite files
RewriteCond %{REQUEST_FILENAME} !-d  # Don't rewrite directories
RewriteRule ^ index.html [L]         # Rewrite everything else
```

---

## 🔄 DEPLOYMENT CHECKLIST

### **For Future Deployments:**

1. **Build the app:**
   ```bash
   cd /var/www/ledlightingsolutionsus.com/app
   npm run build
   ```

2. **Deploy to production:**
   ```bash
   rm -rf /var/www/ledlightingsolutionsus.com/html/*
   cp -r dist/* /var/www/ledlightingsolutionsus.com/html/
   ```

3. **Verify .htaccess exists:**
   ```bash
   ls -la /var/www/ledlightingsolutionsus.com/html/.htaccess
   # Should show the file ✅
   ```

4. **Test routing:**
   ```bash
   curl -I https://ledlightingsolutionsus.com/products
   # Should return HTTP 200 OK ✅
   ```

---

## 🌐 ALTERNATIVE SERVER CONFIGURATIONS

### **Nginx Configuration:**
If using Nginx instead of Apache:

```nginx
server {
    listen 80;
    server_name ledlightingsolutionsus.com;
    root /var/www/ledlightingsolutionsus.com/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### **Netlify/Vercel (No Configuration Needed):**
These platforms automatically handle SPA routing for React apps.

### **Node.js Express Server:**
```javascript
// Serve static files
app.use(express.static('dist'));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
```

---

## 📖 ADDITIONAL RESOURCES

### **Related Topics:**
- React Router BrowserRouter vs HashRouter
- Apache mod_rewrite documentation
- Single Page Application hosting
- Client-side routing vs server-side routing

### **Useful Commands:**
```bash
# Enable mod_rewrite (if not enabled)
sudo a2enmod rewrite
sudo systemctl restart apache2

# Check Apache error logs
sudo tail -f /var/www/ledlightingsolutionsus.com/html/apache2/error.log

# Test Apache configuration
sudo apache2ctl configtest

# Reload Apache (after config changes)
sudo systemctl reload apache2
```

---

## ✅ RESOLUTION SUMMARY

**Problem:** 404 errors on all routes except homepage  
**Cause:** Apache looking for physical files instead of serving SPA  
**Solution:** Created `.htaccess` with proper rewrite rules  
**Result:** All routes now work correctly ✅  
**Status:** RESOLVED and documented  

**Files Modified:**
1. `/var/www/ledlightingsolutionsus.com/html/.htaccess` (production)
2. `/var/www/ledlightingsolutionsus.com/app/public/.htaccess` (source)

**Future Builds:** `.htaccess` will be automatically included from `public/` directory

---

**🎉 Website is now fully functional with proper SPA routing!**
