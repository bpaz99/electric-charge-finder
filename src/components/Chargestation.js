import React from 'react';
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Chargestation(props) {
    const useStyles = makeStyles({
        root: {
            maxWidth: '100%',
            height: '100%',
            display:"grid",
            gridTemplateColumns:"100%",
            gridTemplateRows:"minmax(250px,auto) 150px",
            gridTemplateAreas: '"text" "contact"'
        },
        textArea:{
            gridArea:"text",
            textAlign:"center",
            display:"grid",
            gridTemplateColumns:"100%",
            gridTemplateRows:"minmax(100px,auto) minmax(70%,auto)",
            gridTemplateAreas: '"inf" "connections"'
        },
        AddressInfo:{
            textAlign:"center",
        },
        AccessComments:{
            color:"#3f51b5",
            textAlign:"center",
        },
        information:{
            gridArea:"inf",
            display:"flex",
            flexDirection:"column",
            alignContent:"center"
        },
        connectionsWrapper:{
            gridArea:"connections",
            textAlign:"center"
        },
        connections:{
            display: 'flex',
            flexWrap:"wrap",
            justifyContent: 'space-around'
        },
        connection:{
            width: "40%"
        },
        contact:{
            width:"80%",
            borderTop: "1px solid gray",
            gridArea:"contact",
            margin: "3% auto 0"
        }
    });
    const theme = createMuiTheme({
        typography:{
            caption:{
                fontSize:12
            },
            overline:{
                fontSize:10
            }
        }
      });
    const classes = useStyles();

    return (
        <div className="charge-stn">
            <Card className={classes.root}>
                <CardContent className={classes.textArea}>
                    <ThemeProvider theme={theme} >   
                        <CardContent className={classes.information}>
                            <Typography gutterBottom variant="h5" component="h1">
                                {props.data.AddressInfo.Title}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p" className={classes.AddressInfo}>
                                {props.data.AddressInfo.AddressLine1}, {props.data.AddressInfo.Town}
                            </Typography>                       
                            <Typography variant="body2" color="textSecondary" component="p" className={classes.AccessComments}>
                                {props.data.AddressInfo.AccessComments}
                            </Typography>                       
                        </CardContent>
                        <CardContent className={classes.connectionsWrapper}>
                            <Typography variant="h6" color="textSecondary" component="p" className={classes.bigP}>
                                Connections
                            </Typography>
                            <CardContent className={classes.connections}>
                                {props.data.Connections.map(e=>{
                                return (
                                    <CardContent key={e.ID} className={classes.connection}>
                                        <Typography variant="subtitle1" color="textSecondary" component="p">
                                            Connection type ID:{e.ConnectionTypeID}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary" component="p">
                                            Quantity:{e.Quantity}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary" component="p">
                                            Voltage: {e.Voltage}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary" component="p">
                                            PowerKW:{e.PowerKW}
                                        </Typography>
                                    </CardContent>
                                )})}
                            </CardContent>       
                        </CardContent>
                    </ThemeProvider>
                </CardContent>                
                <CardContent className={classes.contact}>
                    <CardActions className={classes.button}>
                        <Button size="small" color="primary">
                            Get Directions
                        </Button>
                        <Typography variant="caption" color="textSecondary" component="p">
                            • {parseFloat(props.data.AddressInfo.Distance).toFixed(2)}{(props.distanceUnit).toString().toUpperCase()} Away
                        </Typography>
                    </CardActions>
                    <ThemeProvider theme={theme}>
                        <Typography variant="overline" color="textSecondary" component="p">
                            Contact telephone {props.data.AddressInfo.ContactTelephone1}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" component="p">
                            {props.data.DateLastStatusUpdate} Last update
                        </Typography>
                    </ThemeProvider>
                </CardContent>
            </Card>
        </div>


    );
}






export default Chargestation;

