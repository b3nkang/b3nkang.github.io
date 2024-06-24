### ben's personal site

nothing to see here...

#### deployment

```
gh-pages:
cat CNAME

if not present:
echo "" > dist/CNAME
cp dist/CNAME gh-pages/

general deploy:
rm -rf dist
npm run build
cd gh-pages
cp -r ../dist/* .
git add commit
git push origin gh-pages --force
```