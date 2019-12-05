import './style.scss';

window.DatoCmsPlugin.init((plugin) => {
  plugin.startAutoResizer();

  const container = document.createElement('div');
  const title = document.createElement('div');
  const helper = document.createElement('div');

  container.classList.add('wah-divider');
  title.classList.add('wah-divider__title');
  helper.classList.add('wah-divider__help');

  title.textContent = plugin.field.attributes.appeareance.parameters.title;
  helper.textContent = plugin.field.attributes.appeareance.parameters.description;

  document.body.appendChild(container);
  container.appendChild(title);
  container.appendChild(helper);

  console.log(plugin);
});
