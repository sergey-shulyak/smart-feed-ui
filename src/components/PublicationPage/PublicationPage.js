import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        marginTop: '25px',
        marginLeft: '15%',
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {},
    cardHeader: {
        textAlign: 'center'
    },
    button: {

    }
});

class PublicationPage extends React.PureComponent {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={1}>
                        <Link to="/feed">
                            <Button color="secondary" className={classes.button}>
                                Back
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={8}>
                        <Card className={classes.card}>
                            <CardHeader className={classes.cardHeader} title="Publication title"/>
                            <CardContent>
                                {/*<Typography gutterBottom variant="headline" component="h2">*/}
                                {/*Lizard*/}
                                {/*</Typography>*/}
                                <Typography component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed ullamcorper
                                    urna. Quisque egestas sed nulla vitae vulputate. Mauris iaculis dolor a dapibus
                                    accumsan. Quisque enim mauris, convallis sed rutrum nec, pulvinar quis ante. Duis
                                    sed euismod ipsum, varius luctus nibh. Integer porttitor metus mi, et tristique ex
                                    accumsan nec. Nunc gravida neque et iaculis bibendum. Suspendisse mattis massa eu
                                    sapien pellentesque laoreet. Aenean fermentum commodo purus, eu iaculis turpis
                                    cursus eget. Sed porttitor nulla vel velit consequat scelerisque. Nunc feugiat odio
                                    sed vehicula maximus. Pellentesque habitant morbi tristique senectus et netus et
                                    malesuada fames ac turpis egestas. Mauris vestibulum enim ligula, vitae rhoncus
                                    turpis tempus quis. Aenean et magna tincidunt nisl mattis pulvinar ac ac metus.
                                    Quisque suscipit dui tortor, quis porttitor dui ultrices ac.

                                    Aenean vulputate, ligula vitae lobortis condimentum, ligula urna volutpat libero,
                                    eget sodales sapien massa ac dui. Donec pellentesque id dui facilisis luctus.
                                    Vestibulum nibh diam, auctor non ex sit amet, varius varius urna. Donec quis semper
                                    enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                                    inceptos himenaeos. Phasellus nec purus eget leo commodo mattis. Ut ultricies turpis
                                    vitae lacinia congue. Proin dapibus vel magna in semper. Nulla finibus ut lorem eget
                                    tincidunt. Quisque non odio molestie, convallis neque id, blandit felis. Ut rutrum
                                    laoreet ante, at sodales lectus eleifend quis. Donec sit amet tempus nisl.
                                    Pellentesque ipsum mauris, molestie lacinia purus at, varius mollis tellus. Etiam
                                    nibh dui, cursus sed leo id, venenatis egestas odio. Aliquam eu venenatis est, vel
                                    rutrum velit. In vitae metus finibus, fringilla augue non, eleifend libero.

                                    Praesent scelerisque neque id massa cursus, vel fringilla mauris mattis. Nunc
                                    dapibus aliquam nisi a sollicitudin. Sed malesuada accumsan diam quis molestie. Ut
                                    nec neque mauris. Duis scelerisque euismod diam, ut rhoncus purus volutpat nec.
                                    Nullam hendrerit metus pretium, sagittis augue vel, gravida dui. Pellentesque arcu
                                    orci, rutrum nec imperdiet volutpat, lacinia eu ex. Duis eget interdum lorem. Sed in
                                    feugiat libero, quis cursus augue. Duis dapibus tempus lectus, in mattis nunc dictum
                                    nec. Donec sed sapien lorem. Morbi lacinia tincidunt gravida.

                                    Duis sed lacus purus. Proin hendrerit mauris ac libero condimentum, eu vestibulum
                                    tellus varius. Mauris euismod mauris sit amet ante dignissim ultricies. Nullam eu
                                    euismod metus, vel commodo est. Donec ut dignissim odio, a elementum tellus.
                                    Curabitur vestibulum vitae turpis at ultricies. Pellentesque faucibus arcu sed
                                    consequat iaculis. Donec aliquet varius risus in suscipit. In vulputate felis
                                    tortor, venenatis pulvinar ante fermentum eu. Donec consectetur sed elit vel
                                    interdum. Aenean justo eros, congue eget felis id, luctus maximus elit. Nullam
                                    facilisis quis dolor elementum lobortis. Vivamus malesuada dignissim justo,
                                    porttitor dapibus lectus elementum quis.

                                    Mauris eu ante molestie, blandit nibh id, scelerisque dui. Pellentesque in ligula
                                    libero. Nullam molestie leo leo, at cursus odio efficitur a. Pellentesque at orci et
                                    justo molestie pellentesque sed eu metus. Praesent dapibus sapien sit amet efficitur
                                    tempus. Donec vulputate sem ligula, quis viverra elit blandit sed. Nullam
                                    pellentesque dui in dui congue, vestibulum eleifend metus tempus. Nullam quis mi
                                    egestas ex suscipit accumsan. Interdum et malesuada fames ac ante ipsum primis in
                                    faucibus. Aliquam a hendrerit libero. Integer in arcu nulla. Nulla vel ligula
                                    ultricies, accumsan nulla eu, gravida est. Nam ornare, orci vitae sodales
                                    pellentesque, nisi sem ullamcorper tellus, a aliquam lectus nibh at justo.

                                    Nulla neque ante, iaculis at luctus sit amet, volutpat ut lacus. Praesent eget
                                    facilisis lorem, quis aliquet erat. Aliquam faucibus malesuada libero, et vestibulum
                                    leo suscipit non. Vestibulum congue placerat dui, quis dapibus odio condimentum ut.
                                    Morbi volutpat leo a tellus finibus, id pellentesque erat ornare. Vestibulum pretium
                                    pharetra ligula, in lacinia massa congue non. Aenean tristique iaculis orci, quis
                                    euismod sapien. Phasellus tempus est eget ligula pretium, non volutpat purus
                                    blandit. Praesent a faucibus est, sed dapibus arcu. Sed dolor lacus, ornare non
                                    tristique a, faucibus a nulla. In nulla diam, placerat id arcu in, sagittis auctor
                                    enim. Nunc vulputate, purus non gravida malesuada, justo turpis rutrum lorem, sit
                                    amet egestas libero felis a tellus.

                                    Integer tempor erat diam, at fermentum eros dapibus et. Sed id est tellus. Etiam sit
                                    amet imperdiet diam. Ut a laoreet sapien. Donec consectetur lobortis arcu at
                                    iaculis. Cras sed ante vitae elit laoreet aliquet a ac neque. Nunc convallis tempor
                                    lacus vitae faucibus. In semper, nisi a elementum efficitur, mi sem sagittis enim,
                                    non sodales metus felis et risus.

                                    Aenean id ultrices enim, vel maximus tortor. Nam at velit nec magna semper blandit.
                                    Phasellus mollis risus sit amet mauris suscipit, a egestas magna porttitor. Praesent
                                    porttitor magna in ipsum efficitur auctor. Morbi auctor placerat sagittis.
                                    Pellentesque libero ligula, elementum et arcu eget, imperdiet pharetra erat. Aenean
                                    feugiat vulputate sem ac lacinia.

                                    Donec ultricies vulputate finibus. Sed magna nisl, posuere quis dignissim egestas,
                                    placerat sed diam. Maecenas sed tristique magna. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquet tortor
                                    quis luctus blandit. Cras hendrerit, diam ac imperdiet rutrum, sapien nulla posuere
                                    nisi, eget lacinia elit ligula eu tellus. Vestibulum interdum commodo nunc, ut
                                    laoreet orci cursus vitae. Vivamus non pretium magna.

                                    Mauris sit amet tortor ut arcu consectetur euismod. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Curabitur ac sapien interdum, mattis metus sit amet,
                                    porta odio. Suspendisse mi erat, eleifend vel magna sit amet, pharetra consectetur
                                    mi. Morbi sit amet sapien lectus. Proin finibus lacus non arcu feugiat, vel
                                    scelerisque orci vulputate. Nullam feugiat mollis mollis. Vestibulum mollis
                                    elementum risus. Donec ornare tortor sit amet velit bibendum consectetur. Nulla
                                    semper odio ac augue pharetra finibus. Aenean elementum ullamcorper tellus vel
                                    pretium.

                                    Cras consequat faucibus felis sit amet finibus. Integer imperdiet justo ac porta
                                    maximus. Curabitur ornare dolor non purus luctus, vitae scelerisque nisl
                                    scelerisque. Proin in bibendum eros. Phasellus et nisi est. In semper sodales
                                    ligula, ut rhoncus ipsum varius non. Integer at nulla nulla. Nunc dignissim, orci
                                    eget vulputate faucibus, sapien tortor accumsan odio, ut tempus urna metus sit amet
                                    odio.

                                    Sed metus urna, pharetra non maximus ac, fringilla id purus. Nunc orci augue,
                                    commodo nec finibus dapibus, egestas nec nibh. Vivamus lobortis justo et tempor
                                    rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor
                                    lacus at nisi accumsan, id tempus risus venenatis. Nullam quam velit, pharetra sed
                                    malesuada vel, ullamcorper vel lacus. In vitae est est. Nullam ligula leo, ultrices
                                    at quam nec, maximus blandit enim. Donec id vehicula neque, et fermentum lorem. Sed
                                    mollis, purus in bibendum eleifend, sapien sapien interdum ante, sit amet commodo mi
                                    odio et dui. Ut vitae orci consectetur, porttitor velit non, molestie ante. Maecenas
                                    efficitur semper metus, ut maximus elit pellentesque id. Nunc convallis ullamcorper
                                    quam sit amet facilisis. Suspendisse potenti. Morbi sagittis varius egestas.

                                    Nam vel velit in arcu pretium feugiat. Cras rutrum nec arcu scelerisque porta.
                                    Nullam tempus vitae lectus et convallis. Aenean fringilla velit ac tortor interdum,
                                    in placerat nulla molestie. Ut elit augue, lobortis fermentum lacus nec, venenatis
                                    aliquet tellus. Aliquam sagittis nisl in ligula ornare aliquam. Vivamus aliquam
                                    augue nec ligula fermentum luctus. Cras vehicula ultricies quam, ac tincidunt dolor
                                    vestibulum eget. Quisque sodales, felis lacinia pellentesque blandit, tellus magna
                                    ultrices nibh, pretium vestibulum mi arcu a ante. Ut ut elit et ligula iaculis
                                    cursus ut at velit. Duis euismod hendrerit ullamcorper. Mauris ut tellus sit amet
                                    nulla condimentum bibendum nec et libero. Duis pharetra nulla sit amet mauris
                                    eleifend fermentum.

                                    Cras in eros ut est finibus vulputate eu non nulla. Duis nec est enim. Etiam
                                    efficitur libero arcu, eget convallis dolor feugiat id. Quisque augue enim, porta at
                                    eros at, elementum porttitor mi. Etiam finibus felis ac felis pharetra, ut tincidunt
                                    nulla blandit. In euismod, nisi id porttitor viverra, erat lectus faucibus nulla,
                                    sed faucibus magna mauris et ipsum. Sed venenatis quis nunc euismod fermentum.
                                    Pellentesque eleifend elit in quam pharetra, a accumsan nibh tincidunt. Etiam mollis
                                    dolor sit amet risus mattis cursus. Praesent fringilla porttitor mi sit amet
                                    efficitur. Nulla at mollis nunc. Donec hendrerit tortor libero, at cursus ante
                                    sodales id. Morbi blandit dui vitae venenatis feugiat. Donec eget ante sit amet
                                    magna suscipit ultricies eu vel ex.

                                    Duis elementum dignissim justo sit amet gravida. Nulla commodo aliquet metus, at
                                    pharetra justo varius ut. Aliquam erat volutpat. Vestibulum nec tellus sit amet
                                    neque ornare elementum. Aenean volutpat nunc sed purus iaculis scelerisque. Aliquam
                                    elementum ligula eu massa cursus lobortis. Donec in mi in nunc volutpat dictum. Ut
                                    euismod pretium gravida. Donec sodales odio vitae lorem blandit euismod. Vivamus
                                    consectetur enim est, et suscipit ligula pulvinar et. Nam fermentum condimentum
                                    luctus. In hac habitasse platea dictumst. Aenean vehicula vulputate laoreet.

                                    Vestibulum quis mi vitae nibh interdum convallis vel ac enim. Nulla facilisi.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Curabitur convallis dolor sed diam sagittis, vel consequat magna
                                    vestibulum. Etiam in auctor nisl, nec ultrices mauris. Sed facilisis dolor eu tellus
                                    sagittis tincidunt. Nulla in purus tempus, maximus purus non, congue enim.
                                    Vestibulum at molestie diam, et aliquam sem. Aenean a tincidunt sapien. Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit. Nam orci ex, tempus ac bibendum ac,
                                    tristique quis odio. Fusce fringilla felis tellus, nec varius ligula dictum maximus.
                                    Nunc tempus ut ipsum a laoreet. Vestibulum eu molestie risus, eget ultrices augue.

                                    Curabitur nec tempor odio. Nulla luctus nec libero non gravida. Proin eget ligula
                                    lacus. Pellentesque varius, elit eget aliquam aliquam, tortor arcu mollis nisi, eget
                                    lobortis lacus orci ac nulla. Aliquam vel risus nec dui lobortis imperdiet.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                                    egestas. Quisque a lectus et ligula ultricies molestie. Aliquam erat volutpat. In ac
                                    dignissim eros, vel fermentum ex. Curabitur nec nisl in arcu finibus pretium viverra
                                    sed ex. Sed eget rhoncus purus, eu sagittis neque. Quisque risus sapien, ornare
                                    aliquet faucibus id, dapibus sit amet libero. Nullam hendrerit nulla est, id porta
                                    augue suscipit eget.

                                    Fusce eu nulla congue sapien porta pretium. Praesent tristique eget turpis sit amet
                                    feugiat. Ut cursus ipsum in eleifend consectetur. Etiam mauris nibh, iaculis id
                                    congue vel, dapibus vel justo. Nulla vitae venenatis felis, ac aliquam tellus.
                                    Phasellus volutpat odio nec urna tempor luctus. Nulla sed velit nec augue varius
                                    consequat id quis erat. Ut at rutrum ipsum. Vestibulum ullamcorper tempus tellus,
                                    sed fermentum eros interdum non. Proin malesuada facilisis elit non laoreet.
                                    Suspendisse ac sem maximus, sodales ex vel, eleifend orci. Proin sollicitudin non
                                    sapien id congue. In hac habitasse platea dictumst. Vivamus purus eros, ornare eu
                                    augue in, congue lobortis dui. Maecenas hendrerit ultricies risus sit amet feugiat.
                                    Maecenas tempor, arcu vel elementum rutrum, augue urna finibus ante, eu pharetra
                                    felis nulla vehicula risus.

                                    Quisque congue eu enim at maximus. Donec a sapien risus. In hac habitasse platea
                                    dictumst. Sed consectetur mauris eu ipsum congue, quis commodo lorem ultrices. Nulla
                                    facilisi. Sed pulvinar magna leo, non tincidunt turpis accumsan sit amet. Nunc
                                    viverra mollis mattis. Cras accumsan mauris suscipit, molestie dui quis, sagittis
                                    purus. Suspendisse et leo interdum, lacinia diam at, accumsan nibh. Cras varius
                                    lacus vitae pulvinar aliquam.

                                    Nam scelerisque lorem in odio dictum pulvinar. Sed sed ultricies ligula. Vestibulum
                                    eu vestibulum lacus, ac ultricies lorem. Pellentesque enim odio, blandit et augue
                                    nec, gravida sollicitudin diam. Proin at elit id nunc hendrerit mattis non non
                                    risus. Cras at varius massa. Nunc blandit risus at aliquam vulputate. Sed varius
                                    mauris neque, a rhoncus augue fermentum ut. Sed tincidunt nunc ut cursus ultricies.
                                    Nam fermentum nisl sed tortor sagittis dignissim. Etiam rutrum eu lacus vel
                                    fringilla. Integer id augue diam. Cras fermentum massa bibendum, pulvinar augue a,
                                    elementum tellus.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

PublicationPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PublicationPage);