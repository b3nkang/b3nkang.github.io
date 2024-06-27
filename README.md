### ben's personal site

nothing to see here...

#### deployment

```
rm -rf dist
npm run build
cd gh-pages
cp -r ../dist/* .
cp CNAME gh-pages/
git add .
git commit -m "update and deploy"
git push origin gh-pages --force
```