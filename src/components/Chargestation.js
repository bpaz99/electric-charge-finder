import React from 'react';
import { makeStyles,createMuiTheme,ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Chargestation(props) {
    const useStyles = makeStyles({
        root: {
            maxWidth: '100%',
            height: '100%',
            display:"grid",
            gridTemplateColumns:"100%",
            gridTemplateRows:"240px minmax(250px,auto) 150px",
            gridTemplateAreas: ' "img" "text" "contact"'
        },
        media: {
            gridArea:"img",
            height: 240,
        },
        textArea:{
            gridArea:"text",
            display:"grid",
            gridTemplateColumns:"100%",
            gridTemplateRows:"150px 70%",
            gridTemplateAreas: ' "inf" "connections"'
        },
        information:{
            gridArea:"inf"
        },
        connectionsWrapper:{
            gridArea:"connections",
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

      //data validation perhaps?


    return (
        <div className="charge-stn">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://www.chargepoint.com/img/fbshare.jpg"
                    title="Contemplative Reptile"
                    />
                </CardActionArea>
                <CardContent className={classes.textArea}>
                    <ThemeProvider theme={theme} >   
                        <CardContent className={classes.information}>
                            <Typography gutterBottom variant="h5" component="h1">
                                {props.data.AddressInfo.Title}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
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
                                    <CardContent className={classes.connection}>
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

