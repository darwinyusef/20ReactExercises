import Heading from './Heading'; // Importamos la clase Heading

const HeadingComponent = () => {
  const headingInstance = new Heading('¡Bienvenido a React en mdx!');
  const htmlContent = headingInstance.generateHTML();

  // Usamos dangerouslySetInnerHTML para insertar el HTML generado
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default HeadingComponent;