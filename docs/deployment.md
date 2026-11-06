# GitHub Pages deployment

The repository exports a static Next.js site to `out/` and deploys it through `.github/workflows/deploy.yml` after a push to `main`.

## Enable the workflow

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Add the custom domain `roayn.com` in the Pages settings.
4. Add a deployment protection rule to the `github-pages` environment so only the default branch can deploy.
5. Merge the reviewed implementation branch into `main`.

GitHub’s custom-workflow documentation currently uses `actions/checkout@v6`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v4`, and `actions/deploy-pages@v4`. The workflow in this repository follows that official pattern.

## Verify domain ownership first

GitHub recommends verifying a custom domain before assigning it to a Pages site. In GitHub account settings, open **Pages**, add `roayn.com`, and create the exact TXT record GitHub provides. Do not invent or reuse a verification token.

## DNS for `roayn.com`

After the custom domain is saved in GitHub Pages settings, the current GitHub documentation specifies these apex `A` records:

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

For the `www` variant, create:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `appofun.github.io` |

The `www` CNAME must point to the account-level Pages domain without the repository name. Avoid wildcard DNS records. Remove conflicting apex or `www` records before expecting HTTPS issuance.

Official references:

- [Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Securing a GitHub Pages site with HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

## HTTPS

Wait for DNS to resolve and the GitHub certificate to be issued, then enable **Enforce HTTPS** in the Pages settings. DNS changes can take time to propagate. Do not add an HTTPS proxy or redirect that conflicts with GitHub’s certificate validation.

## Important static-hosting limitations

- No server actions, API routes, database, session, or secret processing is available at runtime.
- The contact form creates a local `mailto:` draft and does not submit data to a server.
- Any analytics or third-party form service must be reviewed for privacy, spam protection, and public-key exposure before integration.
- A `CNAME` file is included in the static artifact, but the custom domain must still be configured in repository settings.
