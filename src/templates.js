const engineerTemplate = engineer => {
    ``
}

const managerTemplate = manager => {
const name = manager.name;
const id = manager.employee_id;

    return `
    <div>Manager:${name}</div>
    <div>Manager Id;${id}</div>

    `
}

module.exports = {engineerTemplate, managerTemplate}