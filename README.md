### ben's personal site

nothing to see here...

#### deployment

```
general deploy:
rm -rf dist
npm run build
cd gh-pages
cp -r ../dist/* .
cp CNAME gh-pages/ => if nec
git add commit
git push origin gh-pages --force
```