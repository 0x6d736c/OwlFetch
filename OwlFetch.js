function fetch() {
    current_url = window.location.href;
    if (current_url != "https://www.duolingo.com/words") {
        alert(`You're being redirected from ${current_url} to the Duolingo Words section.\n
        Please run the script again when the correct page loads.`)
        window.location.replace("https://www.duolingo.com/words");
    }

    words_table = document.getElementsByTagName("tbody")[0].childNodes;
    words = [];

    for (row of words_table) { words.push(row.firstChild.firstChild.innerText) };

    copy(words.join("\n"));
}

fetch();
