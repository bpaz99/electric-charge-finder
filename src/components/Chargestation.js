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
            height: '100%'
        },
        media: {
          height: 240,
        },
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
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image="https://www.chargepoint.com/img/fbshare.jpg"
                    title="Contemplative Reptile"
                    />
                </CardActionArea>
                <CardContent>
                    <ThemeProvider theme={theme}>
                        <Typography gutterBottom variant="h5" component="h1">
                            {props.data.AddressInfo.Title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p">
                            {props.data.AddressInfo.AccessComments}
                        </Typography>
                        <Typography variant="h6" color="textPrimary" component="p">
                            Connections
                            {props.data.Connections.map(e=>{
                            return (
                                <ThemeProvider>
                                    <Typography variant="subtitle1" color="textSecondary" component="p">
                                        Connection type ID:{e.ConnectionTypeID}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" component="p">
                                        Quantity:{e.Quantity}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" component="p">
                                        Voltage:{e.Voltage}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" component="p">
                                        PowerKW:{e.PowerKW}
                                    </Typography>
                                </ThemeProvider>
                            )
                        })}
                        </Typography>
                    </ThemeProvider>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Get Directions
                    </Button>
                    <Typography variant="caption" color="textSecondary" component="p">
                        • {parseFloat(props.data.AddressInfo.Distance).toFixed(2)}{(props.distanceUnit).toString().toUpperCase()} Away
                    </Typography>
                </CardActions>
                <CardContent className="card-lastupdate">
                    <ThemeProvider theme={theme}>
                        <Typography variant="overline" color="textSecondary" component="p">
                            Contact telephone {props.data.AddressInfo.ContactTelephone1}
                        </Typography>
                        <Typography variant="overline" color="textSecondary" component="p">
                            {props.data.DateLastStatusUpdate} Last update
                        </Typography>
                    </ThemeProvider>
                </CardContent>
            </Card>
        </div>


    );
}






export default Chargestation;

