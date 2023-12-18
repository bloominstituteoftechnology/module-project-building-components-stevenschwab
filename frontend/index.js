function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    const nav = document.createElement('nav');
    links.forEach(link => {
      const aElement = document.createElement('a');
      const { href, textContent, title } = link;
      aElement.href = href;
      aElement.title = title;
      aElement.textContent = textContent;
      nav.appendChild(aElement);
    })
    return nav;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    const learnerElem = document.createElement('div');
    const { id, fullName, dateOfBirth, favLanguage } = learner;
    const favNameArr = languages.filter(langObj => {
      return langObj.id === favLanguage
    });
    const favLanguageStr = favNameArr[0].name;
    learnerElem.classList.add('learner-card');

    const namePara = document.createElement('p');
    namePara.textContent = fullName;
    learnerElem.appendChild(namePara);

    const idPara = document.createElement('p');
    idPara.textContent = `Learner ID: ${id}`;
    learnerElem.appendChild(idPara);

    const dobPara = document.createElement('p');
    dobPara.textContent = `Date of Birth: ${dateOfBirth}`;
    learnerElem.appendChild(dobPara);

    const favLangPara = document.createElement('p');
    favLangPara.textContent = `Favorite Language: ${favLanguageStr}`;
    learnerElem.appendChild(favLangPara);

    learnerElem.addEventListener('click', (event) => {
      event.stopPropagation()
      const activeCard = document.querySelector('.active');
      learnerElem.classList.toggle('active');
      if (activeCard) activeCard.classList.toggle('active');
    })

    return learnerElem;
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    for (let learnerObj of learners) {
      const learnerElem = buildLearnerCard(learnerObj, languages);
      document.querySelector('section').appendChild(learnerElem);
    }
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const { companyName, address, contactEmail, socialMedia: { twitter, facebook, instagram } } = footerData;
    // create elements
    const footer = document.createElement('footer');
    const companyInfoElem = document.createElement('div');
    const companyNameElem = document.createElement('p');
    const addressElem = document.createElement('p');
    const contactEmailLabelElem = document.createElement('p');
    const emailElem = document.createElement('a');

    const socialMediaElem = document.createElement('div');
    const twitterElem = document.createElement('a');
    const facebookElem = document.createElement('a');
    const instagramElem = document.createElement('a');

    const copyrightElem = document.createElement('div');

    // create hierarchy
    contactEmailLabelElem.appendChild(emailElem);

    companyInfoElem.appendChild(companyNameElem);
    companyInfoElem.appendChild(addressElem);
    companyInfoElem.appendChild(contactEmailLabelElem);

    socialMediaElem.appendChild(twitterElem);
    socialMediaElem.appendChild(facebookElem);
    socialMediaElem.appendChild(instagramElem);

    footer.appendChild(companyInfoElem);
    footer.appendChild(socialMediaElem);
    footer.appendChild(copyrightElem);

    // add classes
    companyInfoElem.classList.add('company-info');
    companyNameElem.classList.add('company-name');
    addressElem.classList.add('address');
    contactEmailLabelElem.classList.add('contact-email');
    socialMediaElem.classList.add('social-media');

    // add hrefs
    emailElem.href = `mailto:${contactEmail}`;
    twitterElem.href = twitter;
    facebookElem.href = facebook;
    instagramElem.href = instagram;

    // add text content
    companyNameElem.textContent = companyName;
    addressElem.textContent = address;
    emailElem.textContent = contactEmail;
    twitterElem.textContent = 'Twitter';
    facebookElem.textContent = 'Facebook';
    instagramElem.textContent = 'Instagram';
    copyrightElem.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY 2023'

    return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  document.querySelector('section').addEventListener('click', () => {
    console.log('clicked outside of section')
    const activeCard = document.querySelector('.active');
    if (activeCard) activeCard.classList.toggle('active');
  })

  //  ✨ do your magic here
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
