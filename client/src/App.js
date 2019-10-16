import React from 'react';
import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const baseURL = "/";
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
    isValid: false,
    transactionHash: '',
    uri: '',
    selectedFile: null
  });

  const handleChange = name => event => {
    setValues({
      ...values, [name]: event.target.value,
      isValid: validateForm()
    });
  };

  const handleChangeForProperty = name => event => {

    setValues({
      ...values, properties: { ...values.properties, [name]: event.target.value },
      isValid: validateForm()
    });
  };

  const handleChangeForPropertyRarity = name => event => {
    setValues({
      ...values, properties: {
        ...values.properties, rarity: {
          ...values.properties.rarity,
          [name]: event.target.value
        }
      },
      isValid: validateForm()
    });
  };

  const onChangeHandler = event => {

    console.log(event.target.files[0])
    setValues({...values, selectedFile: event.target.files[0]})

  }

  const validateForm = function () {
    return values.name && values.description && values.properties["Origin"]
      && values.properties["Special Ability"] && values.properties["rarity"]["name"] && values.properties["rarity"]["display_value"] && values.properties["rarity"]["value"];
  }

  const createToken = () => (e) => {
    console.log("create token");
    console.log(values);
    const senderAddress = prompt("Sender Address: ", "");
    if (!senderAddress) {
      alert('Need Sender Address ...!');
      return;
    }
    const senderPassword = prompt("Sender Password:", "");
    if (!senderPassword) {
      alert('Need Sender password ...!');
      return;
    }
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
    reqBody.append('senderAddress', senderAddress);
    reqBody.append('senderPassword', senderPassword);
    const url = baseURL + "api/erc1155/create";
    axios.post(url, reqBody).then(function (successResp) {
      console.log("successResp = ", successResp);
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
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ERC115</h1>
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

    </div>
  );
}

export default App;
