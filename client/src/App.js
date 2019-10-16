import React from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

var ethereum_address = require('ethereum-address');

const baseURL = "http://192.168.1.81:5000/";
// const baseURL = "/";
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  root: {
    padding: theme.spacing(3, 3),
    border: "1px solid grey",
    width: "567px",
    margin: "auto",
    marginBottom: "10px"
  },
  button: {
    width: "100%",
    marginTop: "10px"
  },
  progress: {
    margin: theme.spacing(2),
    textAlign: "center"
  }
}));

function App() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    image: '',
    name: '',
    description: '',
    properties: {
      "Origin": "",
      "Special Ability": "",
      "rarity": {
        "name": "",
        "value": "",
        "display_value": ""
      }
    },
    senderAddress: '',
    senderAddressValid: false,
    isValid: false,
    transactionHash: '',
    uri: '',
    selectedFile: null,
    isInProgress: false
  });

  const handleChange = name => event => {

    let valueIns = {...values};
    valueIns[name] = event.target.value;
    updateValues(valueIns);
  };


  const handleSenderAddress = () => (e) => {
    console.log(ethereum_address.isAddress(e.target.value));
    
    const senderAddressValid = ethereum_address.isAddress(e.target.value);    
    console.log("s = ", senderAddressValid);
    
    let valueIns = {...values};
    valueIns["senderAddress"] = e.target.value;
    valueIns.senderAddressValid = senderAddressValid;
    updateValues(valueIns);
  }

  const handleChangeForProperty = name => event => {

    let valueIns = {...values};
    valueIns.properties[name] = event.target.value;
    updateValues(valueIns);
  };

  const handleChangeForPropertyRarity = name => event => {

    let valueIns = {...values};
    valueIns.properties.rarity[name] = event.target.value;
    updateValues(valueIns);
  };

  const onChangeHandler = event => {

    console.log(event.target.files[0])
    let valueIns = {...values};
    valueIns.selectedFile = event.target.files[0];
    updateValues(valueIns);
  }

  const updateValues = function(valueIns) {
    valueIns.isValid = validateForm(valueIns);
    console.log(valueIns);
    
    setValues({...valueIns});
  }

  const validateForm = function (valueIns) {
    return valueIns.selectedFile && valueIns.name && valueIns.description && valueIns.properties["Origin"] && valueIns.senderAddress && valueIns.senderAddressValid
      && valueIns.properties["Special Ability"] && valueIns.properties["rarity"]["name"] && valueIns.properties["rarity"]["display_value"] && valueIns.properties["rarity"]["value"];
  }

  const createToken = () => (e) => {
    console.log("create token");
    console.log(values);
    setValues({ ...values, isInProgress: true });
    // const senderAddress = prompt("Sender Address: ", "");
    // if (!senderAddress) {
    //   alert('Need Sender Address ...!');
    //   return;
    // }
    // const senderPassword = prompt("Sender Password:", "");
    // if (!senderPassword) {
    //   alert('Need Sender password ...!');
    //   return;
    // }
    const jsonGenerator = JSON.parse(JSON.stringify(values));
    delete jsonGenerator["isValid"];
    delete jsonGenerator["transactionHash"];
    delete jsonGenerator["uri"];
    // const reqBody = {
    //   jsonGenerator,
    //   senderAddress, senderPassword
    // }

    let reqBody = new FormData();
    reqBody.append('image', values.selectedFile);
    reqBody.append('jsonGenerator', JSON.stringify(jsonGenerator));
    reqBody.append('senderAddress', values.senderAddress);
    // reqBody.append('senderPassword', senderPassword);
    const url = baseURL + "api/erc1155/create";
    axios.post(url, reqBody).then(function (successResp) {
      console.log("successResp = ", successResp);
      if (successResp.data.status.toString().toLowerCase() != "success") {
        alert(successResp.data.message);
        return;
      }
      const transactionHash = successResp.data.txHash;
      const uri = successResp.data.uri;
      setValues({
        ...values, transactionHash, uri
      });
      window.open("https://ropsten.etherscan.io/tx/" + transactionHash, '_blank');

    }).catch(function (errResp) {
      console.log("errResp = ", errResp);
    })


  }

  const formDesign = function () {
    return (
      <Paper className={classes.root}>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              required
              id="properties-origin-input-image"
              label="Properties Origin"
              className={classes.textField}
              value={values.properties["Origin"]}
              onChange={handleChangeForProperty('Origin')}
              margin="normal"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              required
              id="properties-special-ability-input-image"
              label="Properties Special Ability"
              className={classes.textField}
              value={values.properties["Special Ability"]}
              onChange={handleChangeForProperty('Special Ability')}
              margin="normal"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              required
              id="properties-rarity-name-image"
              label="Properties Rarity Name"
              className={classes.textField}
              value={values.properties.rarity["name"]}
              onChange={handleChangeForPropertyRarity('name')}
              margin="normal"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              required
              id="properties-rarity-value-image"
              label="Properties Rarity Value"
              className={classes.textField}
              value={values.properties.rarity["value"]}
              onChange={handleChangeForPropertyRarity('value')}
              margin="normal"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              required
              id="properties-rarity-display_value-image"
              label="Properties Rarity Display Value"
              className={classes.textField}
              value={values.properties.rarity["display_value"]}
              onChange={handleChangeForPropertyRarity('display_value')}
              margin="normal"
              variant="outlined"
            />
          </div>

          <div>
            <TextField
              required
              id="description-input-name"
              label="Name"
              className={classes.textField}
              value={values.name}
              onChange={handleChange('name')}
              margin="normal"
              variant="outlined"
            />

          </div>

          <div>
            <TextField
              required
              id="description-input-id"
              label="Description"
              className={classes.textField}
              value={values.description}
              onChange={handleChange('description')}
              margin="normal"
              variant="outlined"
              multiline
              rowsMax="4"
            />
          </div>

          <div>
            <TextField
              required
              id="sender-address-input-image"
              label="Sender Address"
              className={classes.textField}
              value={values.senderAddress}
              onChange={handleSenderAddress()}
              margin="normal"
              variant="outlined"
              error={values.senderAddress && !values.senderAddressValid ? true : false}
              helperText={values.senderAddress && !values.senderAddressValid ? "Enter valid sender address" : ""}
            />
          </div>

          <div style={{paddingLeft: "10px", marginTop: "10px", marginBottom: "10px"}}>
            <input type="file" name="file" onChange={onChangeHandler} />
          </div>

          <div>
            <Button disabled={!values.isValid} variant="contained" color="primary" className={classes.button} onClick={createToken()}>
              Create Token
        </Button>
          </div>
        </form>

        {
          (!values.transactionHash || !values.uri) ? null :
            <div>
              <br />
              <a href={values.uri} target="_blank">Click here to view character info</a>
              <br />
              <div style={{ color: "red", fontSize: "16px" }}>Transaction Hash: {values.transactionHash}</div>
            </div>

        }
      </Paper>

    )
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ERC115</h1>
      {
        values.isInProgress ? <CircularProgress className={classes.progress} /> : formDesign()

      }

    </div>
  );
}

export default App;
