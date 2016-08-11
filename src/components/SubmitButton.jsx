import React from 'react';

export default class SubmitButton extends React.Component {

    submitCode() {
        let editor = ace.edit("editor");
        let sourceCode = editor.getValue();

        this.props.onCodeSubmitted(sourceCode);

        $.ajax({
            type: "POST",
            data: sourceCode,
            processData: false,
            contentType: 'text/plain',
            url: `${this.props.serverUrl}/problems/${this.props.problemId}/submit`,
            crossDomain: true
        }).done(this.props.onResultReceived);
    }

    render() {
        const submitButtonStyle = {
            width: 200
        };

        return <button
                  type="button"
                  className="btn btn-success btn-lg pull-right"
                  onClick={this.submitCode.bind(this)}
                  style={submitButtonStyle}>
            <i className="fa fa-send"> </i> Submit
        </button>;
    }
}