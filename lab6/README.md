
Lab 6 - Web Optimization
Name <Paul Jang>
  Optimizations Implemented:
  1. I made an external javascript file "script.js" and put all the javascript portion into the external file.
  2. I made an external css file "style.css" and put all the style portion into the external file.
  3. In javascript, I tried to group up all the elements called by "getElementById" setting them in variables.
    ex) var comb1 = document.getElementByID('comb1')
  4. Minified Markup tags
    ex) In my code's line  47, I deleted a pair of unnecessary div tags to minify markups.
  5. Gzip Compression </br>
    1) I enabled deflate_module from Apache httpd.conf. </br>
    2) Later I added the following code into the httpd.conf.
      <IfModule mod_deflate.c>

        AddOutputFilterByType DEFLATE text/plain
        AddOutputFilterByType DEFLATE text/html
        AddOutputFilterByType DEFLATE text/xml
        AddOutputFilterByType DEFLATE text/css
        AddOutputFilterByType DEFLATE application/xml
        AddOutputFilterByType DEFLATE application/xhtml+xml
        AddOutputFilterByType DEFLATE application/rss+xml
        AddOutputFilterByType DEFLATE application/javascript
        AddOutputFilterByType DEFLATE application/x-javascript

        DeflateCompressionLevel 9

        BrowserMatch ^Mozilla/4 gzip-only-text/html  
        BrowserMatch ^Mozilla/4\.0[678] no-gzip  
        BrowserMatch \bMSIE !no-gzip !gzip-only-text/html  
        
        SetEnvIfNoCase Request_URI \.(?:gif|jpe?g|png|bmp|zip|gz|rar|7z)$ no-gzip dont-vary
        
        ####log configuration
        ##DeflateFilterNote Input instream
        ##DeflateFilterNote Output outstream
        ##DeflateFilterNote Ratio ratio
        ##LogFormat '"%r" %{outstream}n/%{instream}n (%{ratio}n%%)' deflate
        ##CustomLog logs/deflate_log deflate
  6. Minify JavaScript
    Using jscompress.com, I could save 5.87 kb(28.75% compression).
    The original file : script.js => compressed file : compressed.js
  7. Minify CSS
    Using "https://www.toptal.com/developers/cssminifier/", 
    I could minify my css file into compressed_style.css
  
