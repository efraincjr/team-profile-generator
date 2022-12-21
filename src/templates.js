const engineerTemplate = engineer => {
  const name = engineer.name;
  const id = engineer.employee_id;
  const email = engineer.email;
  const role = engineer.getRole();
  const github = engineer.getGitHub();

  return `
    <h2> ${role.toUpperCase()} </h2>
    <div>Name: ${name}</div>
    <div>Email: ${email}</div>
    <div>Employee Id:${id}</div>
    <div>Github: ${github} </div>
    `
};

const managerTemplate = manager => {
  const name = manager.name;
  const id = manager.employee_id;
  const email = manager.email;
  const officeNumber = manager.getOfficeNumber();
  const role = manager.getRole();

  return `
    <h2> ${role.toUpperCase()} </h2>
    <div>Name: ${name}</div>
    <div>Email: ${email}</div>
    <div>Employee Id:${id}</div>
    <div>Office Number: ${officeNumber}</div>

    `
};

const internTemplate = intern => {
    const name = intern.name;
    const id = intern.employee_id;
    const email = intern.email;
    const role = intern.getRole();
    const school = intern.getSchool();
  
    return `
      <h2> ${role.toUpperCase()} </h2>
      <div>Name: ${name}</div>
      <div>Email: ${email}</div>
      <div>Employee Id:${id}</div>
      <div>School: ${school} </div>
      `
}
module.exports = { engineerTemplate, managerTemplate, internTemplate };
