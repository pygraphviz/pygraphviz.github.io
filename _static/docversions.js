var versions = ['1.12', '1.11', '1.10', '1.9', '1.8', '1.7', '1.6', '1.5', '1.3', '1.2'];

function insert_version_links() {
    for (i = 0; i < versions.length; i++){
        open_list = '<li>'
        if (typeof(DOCUMENTATION_OPTIONS) !== 'undefined') {
            if ((DOCUMENTATION_OPTIONS['VERSION'] == versions[i]) ||
                (DOCUMENTATION_OPTIONS['VERSION'].match(/latest$/) && (i == 0))) {
                open_list = '<li id="current">'
            }
        }
        document.write(open_list);
        document.write('<a href="URL">pygraphviz VERSION</a> </li>\n'
                        .replace('VERSION', versions[i])
                        .replace('URL', 'https://pygraphviz.github.io/documentation/pygraphviz-' + versions[i]));
    }
}
