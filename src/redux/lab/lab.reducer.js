const INIITIAL_STATE = {
    currentLab: null
    // currentLab: {
    //     steps:[
    //       {
    //         title: "Sample Lab Step 1 from Redux",
    //         markdown: "### Step 1 - Insert a record\n" +
    //         "testing adding some text\n" +
    //         "testing adding some text\n" +
    //         "### Heoping Kiley get Dallas" +
    //         "testing adding some text\n `asdasdfasdf`\n" +
    //         "```\n" +
    //         "db.mycollection.insertOne({ name: 'fred'})\n" +
    //         "```\n",
    //         copyText: "db.mycollection.insertOne({ name: 'fred'})",
    //         checkResults: "asfasdf"
    //       },
    //       {
    //         title: "Sample Lab Step 2",
    //         markdown: "### Step 2 - Find a record\n" +
    //         "```\n" +
    //         "db.mycollection.findOne(\n" +
    //         "                          {\n" +
    //         "                            name: 'fred',\n" +
    //         "                            city: 'Bedrock'\n" +
    //         "                          }\n" +
    //         "                        );\n" +
    //         "```",
    //         copyText: "db.mycollection.findOne()"
    //       },
    //       {
    //         title: "Congratulations!!  You have completed this section.",
    //         markdown:"## Section Complete",
    //         copyText: null
    //       }
    //     ]
    //   }
}

const labReducer = (state = INIITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_LAB':
            return {
                ...state,
                currentLab: action.payload
            }
        default:
            return state;
    }
}

export default labReducer;