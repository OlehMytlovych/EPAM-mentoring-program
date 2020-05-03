import './desktopView.scss';

const createAds = (ad: object): Node => {
  const adBlock = document.createElement('div');
  const desc = document.createElement('p');
  const company = document.createElement('p');
  const link = document.createElement('a');

  adBlock.classList.add('add-block');
  link.classList.add('add-block--link');
  desc.classList.add('add-block--description');
  company.classList.add('add-block--company');

  desc.textContent = `ADS: ${ad.text}`;
  company.textContent = `Company: ${ad.company}`;
  link.setAttribute('href', ad.url);

  link.append(desc);
  link.append(company);
  adBlock.append(link);
  
  return adBlock;
}

const createInfoBlock = (info: object): Node => {
  const infoBlock = document.createElement('div');
  const pageInfo = document.createElement('p');
  const usersInfo = document.createElement('p');

  pageInfo.textContent = `Page ${info.page} of ${info.total_pages}`;
  usersInfo.textContent = `Shown ${info.per_page} users out of ${info.total}`;

  infoBlock.classList.add('info-block');
  pageInfo.classList.add('info-block--page');
  usersInfo.classList.add('info-block--users');

  infoBlock.append(pageInfo);
  infoBlock.append(usersInfo);

  return infoBlock;
}

const createUserTile = (user: object): Node => {
  const userTile = document.createElement('div');
  const userImage = document.createElement('img');
  const userNames = document.createElement('p');
  const userEmail = document.createElement('p');

  userTile.classList.add('user-tile');
  userImage.classList.add('user-tile--img');
  userNames.classList.add('user-tile--names');
  userEmail.classList.add('user-tile--email');
  
  userImage.setAttribute('src', user.avatar);
  userNames.textContent = `Name: ${user.first_name} ${user.last_name}`;
  userEmail.textContent = `Email: ${user.email}`;

  userTile.append(userImage, userNames, userEmail);

  return userTile;
}

const createUsers = (users: object): Node => {
  const usersBlock = document.createElement('div');
  usersBlock.classList.add('users-block');

  users.forEach((user:object) => {
    usersBlock.append(createUserTile(user));
  });
  
  return usersBlock;
}

const displayDesktopView = (data: object) => {
  const { data: users, ad, ...info } = data;
  const root = document.querySelector('#app-root');
  const usersBlock = createUsers(users);
  const infoBlock = createInfoBlock(info);
  const adBlock = createAds(ad);

  root.append(adBlock);
  root.append(infoBlock);
  root.append(usersBlock);
};

export default displayDesktopView;
