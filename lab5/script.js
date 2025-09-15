document.addEventListener("DOMContentLoaded", () => {
    const patterns = {
        fullName: /^[А-ЯЁІЇЄҐ][А-Яа-яёЁіїєґҐ'’\-]+\s[А-ЯЁІЇЄҐ]\.\s*[А-ЯЁІЇЄҐ]\.$/u,
        idcard: /^[A-Za-zА-Яа-яЁёІіїЄєҐґ]{2}\s№\d{6}$/u,
        faculty: /^[A-Za-zА-Яа-яЁёІіїЄєҐґ]{4}$/u,
        dob: /^\d{2}\.\d{2}\.\d{4}$/,
        address: /^м\.\s[А-ЯЁІЇЄҐ][А-Яа-яёЁіїєґҐ\-\s]+$/u
    };

    const form = document.getElementById("studentForm");
    const errorsBox = document.getElementById("errors");

    function clearErrors() {
        errorsBox.innerHTML = "";
        document.querySelectorAll(".error, .success").forEach(el =>
            el.classList.remove("error", "success")
        );
    }

    function markField(input, isValid, message = "") {
        input.classList.remove("error", "success");
        if (isValid) {
            input.classList.add("success");
        } else {
            input.classList.add("error");
            if (message) {
                const div = document.createElement("div");
                div.className = "error-line";
                div.textContent = message;
                errorsBox.appendChild(div);
            }
        }
    }

    function validDateParts(d, m, y) {
        d = Number(d);
        m = Number(m);
        y = Number(y);
        if (y < 1900 || y > new Date().getFullYear()) return false;
        if (m < 1 || m > 12) return false;
        const mdays = [
            31,
            (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? 29 : 28,
            31, 30, 31, 30, 31, 31, 30, 31, 30, 31
        ];
        return d >= 1 && d <= mdays[m - 1];
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearErrors();

        const fullName = document.getElementById("fullName");
        const idcard = document.getElementById("idcard");
        const faculty = document.getElementById("faculty");
        const dob = document.getElementById("dob");
        const address = document.getElementById("address");

        let valid = true;

        markField(
            fullName,
            patterns.fullName.test(fullName.value.trim()),
            "ПІБ має бути в форматі: Прізвище І. О."
        );

        markField(
            idcard,
            patterns.idcard.test(idcard.value.trim()),
            "ID-Card має бути у форматі: ТТ №ЧЧЧЧЧЧ"
        );

        markField(
            faculty,
            patterns.faculty.test(faculty.value.trim()),
            "Факультет має містити рівно 4 літери"
        );

        if (patterns.dob.test(dob.value.trim())) {
            const parts = dob.value.trim().split(".");
            markField(dob, validDateParts(parts[0], parts[1], parts[2]), "Невірна дата");
        } else {
            markField(dob, false, "Дата має бути в форматі ДД.ММ.РРРР");
        }

        markField(
            address,
            patterns.address.test(address.value.trim()),
            "Адреса має бути у форматі 'м. Місто'"
        );

        if (document.querySelectorAll(".error").length > 0) {
            valid = false;
        }

        if (!valid) {
            const note = document.createElement("div");
            note.className = "note";
            note.textContent =
                "Знайдено помилки. Поля з помилками підсвічені червоним.";
            errorsBox.prepend(note);
            return;
        }

        const out = `
    <h2>Введена інформація</h2>
    <ul>
      <li><strong>ПІБ:</strong> ${escapeHtml(fullName.value.trim())}</li>
      <li><strong>ID-Card:</strong> ${escapeHtml(idcard.value.trim())}</li>
      <li><strong>Факультет:</strong> ${escapeHtml(faculty.value.trim())}</li>
      <li><strong>Дата народження:</strong> ${escapeHtml(dob.value.trim())}</li>
      <li><strong>Адреса:</strong> ${escapeHtml(address.value.trim())}</li>
    </ul>
  `;

        const win = window.open(
            "",
            "_blank",
            "width=600,height=400,scrollbars=yes"
        );
        if (win) {
            win.document.write(
                '<!doctype html><html lang="uk"><head><meta charset="utf-8"><title>Ваша інформація</title></head><body>'
            );
            win.document.write(out);
            win.document.write("</body></html>");
            win.document.close();
        } else {
            alert("Браузер заблокував відкриття нового вікна.");
        }
    });

    document.querySelectorAll("input").forEach(inp => {
        inp.addEventListener("input", () => {
            inp.classList.remove("error", "success");
            errorsBox.innerHTML = "";
        });
    });

    function escapeHtml(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }



    const tableBox = document.getElementById("tableBox");
    const colorPicker = document.getElementById("colorPicker");

    const table = document.createElement("table");
    let number = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement("td");
            cell.textContent = number;
            cell.dataset.num = number;
            number++;
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    tableBox.appendChild(table);

    function randomColor() {
        return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    }

    table.querySelectorAll("td").forEach(cell => {
        const num = Number(cell.dataset.num);

        cell.addEventListener("mouseenter", () => {
            if (num === 4) {
                cell.style.background = randomColor();
                cell.style.color = randomColor();
            }
        });

        cell.addEventListener("click", () => {
            if (num ===4) {
                cell.style.background = colorPicker.value;
            }
        });

        cell.addEventListener("dblclick", () => {
            if(num === 4) {
                const rows = table.rows;
                for (let r = 0; r < 6; r++) {
                    rows[r].cells[5 - r].style.background = colorPicker.value;
                }
            }
        });
    });

});