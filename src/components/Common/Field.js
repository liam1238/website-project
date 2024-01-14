import React, {Component} from "react";

class Field extends Component {
    render () {
        return (
            <div className="form-group">
                {this.props.elementName === 'input' ? 
                    <input 
                        className="form-control" 
                        id={this.props.name} 
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        onChange={e => {this.props.onChange(e)}}
                    />
                : 
                    <textarea 
                        className="form-control" 
                        id={this.props.name} 
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        onChange={e => {this.props.onChange(e)}}
                    />
                }
                <div className="invalid-feedback">A name is required.</div>
            </div>
        )
    }
}

export default Field;