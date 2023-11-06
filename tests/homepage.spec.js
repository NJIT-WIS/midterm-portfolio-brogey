const { test, expect } = require('@playwright/test');

test('check that "Brody Jackson" text is present', async ({ page }) => {
  await page.goto('/');
  
  // Using the expect method with a page locator
  // This will check if the text "express works" is present anywhere on the page
  // Using a locator to get the text content of the h1 element
  const heading = page.locator('h1').first();
  await expect(heading).toHaveText('Brody Jackson');

});


test('Check that a meta tag exists for a site description', async ({ page }) => {
  await page.goto('/');

  // Define the name of the meta tag you want to check
  const metaTagName = 'description';
  const metaTags = await page.$$(`meta[name="${metaTagName}"]`);

  // Check if at least one matching meta tag is found
  await expect(metaTags.length).toBeGreaterThan(0);
});

test('Check that a meta tag exists for site keywords', async ({ page }) => {
  await page.goto('/');

  // Define the name of the meta tag you want to check
  const metaTagName = 'keywords';
  const metaTags = await page.$$(`meta[name="${metaTagName}"]`);

  // Check if at least one matching meta tag is found
  await expect(metaTags.length).toBeGreaterThan(0);
});

test('check that UTF-8 meta tag is present', async ({ page }) => {
  //Arrange: Go to the site homepage
  await page.goto('/');

  //Act: Get the content attribute of the meta charset tag
  const metaCharset = await page.$eval('meta[charset]', (meta) => meta.getAttribute('charset'));

  //Assert: Check if the charset is set to UTF-8
  await expect(metaCharset).toBe('utf-8');
});

test('Check for "bio-card" div', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the page you want to test

  // Define a selector for the div with the "bio-card" class
  const bioCardSelector = 'div.bio-card'; // Replace with the actual selector

  // Use the `waitForSelector` method to wait for the selector to appear on the page
  await page.waitForSelector(bioCardSelector, { timeout: 5000 });

  // Check if the "bio-card" div is present
  const isBioCardPresent = await page.$(bioCardSelector);

  // Perform an assertion to check if the div is present
  expect(isBioCardPresent).not.toBeNull();
});

test('Check for "headshot-card" div', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the page you want to test

  // Define a selector for the div with the "headshot-card" class
  const headshotCardSelector = 'div.headshot-card'; // Replace with the actual selector

  // Use the `waitForSelector` method to wait for the selector to appear on the page
  await page.waitForSelector(headshotCardSelector, { timeout: 5000 });

  // Check if the "headshot-card" div is present
  const isHeadshotCardPresent = await page.$(headshotCardSelector);

  // Perform an assertion to check if the div is present
  expect(isHeadshotCardPresent).not.toBeNull();
});

test('Check for "articles-card" div', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the page you want to test

  // Define a selector for the div with the "articles-card" class
  const articlesCardSelector = 'div.articles-card'; // Replace with the actual selector

  // Use the `waitForSelector` method to wait for the selector to appear on the page
  await page.waitForSelector(articlesCardSelector, { timeout: 5000 });

  // Check if the "articles-card" div is present
  const isArticlesCardPresent = await page.$(articlesCardSelector);

  // Perform an assertion to check if the div is present
  expect(isArticlesCardPresent).not.toBeNull();
});

test('Check for "projects-card" div', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the page you want to test

  // Define a selector for the div with the "projects-card" class
  const projectsCardSelector = 'div.projects-card'; // Replace with the actual selector

  // Use the `waitForSelector` method to wait for the selector to appear on the page
  await page.waitForSelector(projectsCardSelector, { timeout: 5000 });

  // Check if the "projects-card" div is present
  const isProjectsCardPresent = await page.$(projectsCardSelector);

  // Perform an assertion to check if the div is present
  expect(isProjectsCardPresent).not.toBeNull();
});

test('Check for "socials-card" div', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the page you want to test

  // Define a selector for the div with the "socials-card" class
  const socialsCardSelector = 'div.socials-card'; // Replace with the actual selector

  // Use the `waitForSelector` method to wait for the selector to appear on the page
  await page.waitForSelector(socialsCardSelector, { timeout: 5000 });

  // Check if the "socials-card" div is present
  const isSocialsCardPresent = await page.$(socialsCardSelector);

  // Perform an assertion to check if the div is present
  expect(isSocialsCardPresent).not.toBeNull();
});

test('Check for a hyperlink to "resume.html"', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the page you want to test

  // Define a selector for the hyperlink
  const resumeLinkSelector = 'a[href="resume.html"]'; // Replace with the actual selector

  // Use the `waitForSelector` method to wait for the selector to appear on the page
  await page.waitForSelector(resumeLinkSelector, { timeout: 5000 });

  // Check if the hyperlink to "resume.html" is present
  const isResumeLinkPresent = await page.$(resumeLinkSelector);

  // Perform an assertion to check if the hyperlink is present
  expect(isResumeLinkPresent).not.toBeNull();
});

test('Check for a link to a GitHub profile', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the HTML file you want to test

  // Define a selector for the link to the GitHub profile
  const githubLinkSelector = 'a[href*="github.com"]'; // This selects any link containing "github.com" in the href attribute

  // Use the `waitForSelector` method to wait for the selector to appear on the page
  await page.waitForSelector(githubLinkSelector, { timeout: 5000 });

  // Check if a link to a GitHub profile is present
  const isGithubLinkPresent = await page.$(githubLinkSelector);

  // Perform an assertion to check if the link is present
  expect(isGithubLinkPresent).not.toBeNull();
});

test('Check for a link to a LinkedIn profile', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the HTML file you want to test

  // Define a selector for the link to the LinkedIn profile
  const linkedinLinkSelector = 'a[href*="linkedin.com"]'; // This selects any link containing "linkedin.com" in the href attribute

  // Use the `waitForSelector` method to wait for the selector to appear on the page
  await page.waitForSelector(linkedinLinkSelector, { timeout: 5000 });

  // Check if a link to a LinkedIn profile is present
  const isLinkedinLinkPresent = await page.$(linkedinLinkSelector);

  // Perform an assertion to check if the link is present
  expect(isLinkedinLinkPresent).not.toBeNull();
});

test('Check for a link to a Twitter profile', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the HTML file you want to test

  // Define a selector for the link to the Twitter profile
  const twitterLinkSelector = 'a[href*="twitter.com"]'; // This selects any link containing "twitter.com" in the href attribute

  // Use the `waitForSelector` method to wait for the selector to appear on the page
  await page.waitForSelector(twitterLinkSelector, { timeout: 5000 });

  // Check if a link to a Twitter profile is present
  const isTwitterLinkPresent = await page.$(twitterLinkSelector);

  // Perform an assertion to check if the link is present
  expect(isTwitterLinkPresent).not.toBeNull();
});

test('Check for an image inside the "headshot-card" div', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the page you want to test

  // Define a selector for the "headshot-card" div
  const headshotCardSelector = 'div.headshot-card'; // Replace with the actual selector

  // Use the `waitForSelector` method to wait for the "headshot-card" div to appear on the page
  await page.waitForSelector(headshotCardSelector, { timeout: 5000 });

  // Check if an image is present inside the "headshot-card" div
  const imageSelector = `${headshotCardSelector} img`; // Combine the "headshot-card" selector with the image tag
  const isImagePresent = await page.$(imageSelector);

  // Perform an assertion to check if an image is present
  expect(isImagePresent).not.toBeNull();
});

test('Check for a form with an email input', async ({ page }) => {
  await page.goto('/'); // Replace with the URL of the page you want to test

  // Define a selector for the form with an email input
  const emailFormSelector = 'form input[type="email"]'; // Replace with the actual selector

  // Use the `waitForSelector` method to wait for the form to appear on the page
  await page.waitForSelector(emailFormSelector, { timeout: 5000 });

  // Check if a form with an email input is present
  const isEmailFormPresent = await page.$(emailFormSelector);

  // Perform an assertion to check if the form is present
  expect(isEmailFormPresent).not.toBeNull();
});