To regenerate the icons. The CLI for Inkspace needs full paths.

```sh
for x in 16 32 48 64 128 256 512 ; do inkscape --export-png /Users/ra/Projects/github/lichessChrome/ext/icons/knight${x}.png -w ${x} /Users/ra/Projects/github/lichessChrome/ext/icons/knight.svg ; done
```