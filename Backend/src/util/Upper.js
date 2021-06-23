class Upper {
    body(body) {
        const {name, type, description, manager, sub_manager, begin} = body
        const up = {
            name: name.toUpperCase(),
            type: type.toUpperCase(),
            description: description.toUpperCase(),
            manager: manager.toUpperCase(),
            sub_manager: sub_manager.toUpperCase(),
            begin: begin.toUpperCase()
        }
        return up
    }
}

module.exports = new Upper()