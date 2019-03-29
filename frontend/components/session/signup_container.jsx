import { connect } from 'react-redux';
import { createNewUser} from '../../actions/session_actions';
import Signup from './signup';

//container has MSP and MDP
//makes you be able to use these functions in your component ;)!
const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
})


//two invocations
//createNewUser in props in signup.jsx (can call this.props.createNewUser(JSON OBJECT))
export default connect(null, mapDispatchToProps)(Signup);