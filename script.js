function dynamicDropdown(listIndex) {
    document.getElementById("rooms").length = 0;

    for (let i = 1; i < Number(listIndex) + 1; i++) {
        document.getElementById("rooms").options[i - 1] = new Option(i.toString(), i);
    }
}