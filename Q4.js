// Q4: Custom Form Builder

class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    renderForm(containerID) {
        const container = document.getElementById(containerID);
        let html = "<form id='dynamicForm'>";

        this.fields.forEach(f => {
            html += `
                <label>${f.label}</label>
                <input type="\${f.type}" name="\${f.label}" /><br><br>
            `;
        });

        html += `<button type="button" onclick="getFormData()">Submit</button></form>`;
        container.innerHTML = html;
    }
}

function getFormData() {
    const formData = {};
    const inputs = document.querySelectorAll("#dynamicForm input");

    inputs.forEach(inp => {
        formData[inp.name] = inp.value;
    });

    console.log("Form Data:", formData);
}

const builder = new FormBuilder([
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
]);
