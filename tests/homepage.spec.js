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