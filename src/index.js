import './style.sass';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const container = document.createElement('div');
  const title = document.createElement('div');
  const helper = document.createElement('div');

  container.classList.add('wahDivider');
  title.classList.add('wahDivider_title');
  helper.classList.add('wahDivider_help');

  title.textContent = 'WAH Divider';
  helper.textContent = 'with helper text';

  document.body.appendChild(container);
  container.appendChild(title);
  container.appendChild(helper);
});
