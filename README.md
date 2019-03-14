# Oblate Theme

Oblate theme for hugo is a minimalistic theme for bloggers based on the theme of the same-named Oblate from [Tania Rascia](//github.com/taniarascia). Noteworthy features of this Hugo theme are the support for RSS feeds, syntax highlighting for source code.

![Screenshot](/images/screenshot.png)


## Installation

Inside the folder of your Hugo site, run:

```bash
$ cd themes
$ git clone https://github.com/zapatran/hugo-oblate-theme
```

or also you can add it as a submodule

```bash
$ git submodule add https://github.com/zapatran/hugo-oblate-theme themes/hugo-oblate-theme
```

For more information, please read Hugo's official [setup guide](//gohugo.io/overview/installing/).

### The config file

Take a look inside the [`exampleSite`](//github.com/zapatran/hugo-oblate-theme/tree/master/exampleSite) folder of this theme. You'll find a file called [`config.toml`](//github.com/zapatran/hugo-oblate-theme/blob/dev/exampleSite/config.toml).

To use it, copy the [`config.toml`](//github.com/zapatran/hugo-oblate-theme/blob/dev/exampleSite/config.toml) file to the root folder of your Hugo site. Feel free to change the strings as you like to customize your website.

Make sure to update the `themesDir` property in the config file to point to your site's theme folder, otherwise an error will be thrown indicating the themes folder is unable to be found.

## About page

Use the about page to introduce yourself to your visitors. You can customize the content as you like in the [`about.md`](https://github.com/zapatran/hugo-oblate-theme/tree/master/exampleSite/content).

## Pages

You can create others pages using

```bash
$ hugo new --kind page <new-page>.md
```

## Posts

In order to generate new entry

```bash
$ hugo new  post/<new-entry>.md
```

## Disqus

This theme features a comment system powered by Disqus too. Just add your Disqus-shortname to the [`config.toml`](//github.com/zapatran/hugo-oblate-theme/blob/dev/exampleSite/config.toml) and let readers respond to your blog posts.

## Emojicon

This theme also add support to [emojicon](https://emojicom.io). Just add your key to [`config.toml`](//github.com/zapatran/hugo-oblate-theme/blob/dev/exampleSite/config.toml) and get feedback from your visitors 😃.

## Social link icons

You can add a social link panel in the navbar by adding entries to the `social` block in the [`config.toml`](//github.com/zapatran/hugo-oblate-theme/blob/dev/exampleSite/config.toml). the theme is using the icon fonts [Font awesome](https://fortawesome.github.io/Font-Awesome/)

## Almost done

To see your site in action, run Hugo's built-in local server.

    $ hugo server

Now enter [`localhost:1313`](http://localhost:1313) in the address bar of your browser.


## Contributing

Found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/zapatran/hugo-oblate-theme/issues) to let me know. Or directly make a [pull request](https://github.com/zapatran/hugo-oblate-theme/pulls).

Please create a separate branch for your pull request.


## License

This theme is released under the MIT license. For more information read the [license](https://github.com/zapatran/hugo-oblate-theme/blob/master/LICENSE).


## Acknowledgements

Thanks to

- [Tania Rascia](//github.com/taniarascia) for creating the original theme
