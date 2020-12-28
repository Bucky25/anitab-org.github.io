import React from 'react';
import {View , StyleSheet, Text} from 'react-native';
import EventCard from './Cards';
import {getevents_highlights} from './../../content/events_and_highlights';
import SectionSubheader from './../SectionSubheader';

const events_highlight = getevents_highlights();
function Events () {
        return (
         <View style={styles.container} >
            <SectionSubheader
                title={events_highlight.sections[0].title}
            />
            {events_highlight.sections[0].content.map((detail,index) => {   
                return <Text style={styles.description} key={index}>{detail.par}</Text>;
            })}
            <View
              style={styles.cardContainer}
            >
                {events_highlight.sections[1].events.map((event_detail,index) => (
                    <EventCard
                        key={event_detail.title}
                        props={event_detail}
                        links={events_highlight.icon_links}
                        backgroundColor="#e7edfd"
                        padding={16}
                    />
                ))}
            </View>
         </View>   
        );   
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        alignItems: 'left',
        paddingLeft: 16,
        paddingRight: 16,
        marginTop: 32,
    },
    description: {
        flex: 1,
        marginTop: 16,
        paddingLeft: 16,
        fontSize: 18,
        flexGrow: 1,
        fontWeight: 150,
        color: '#103B81',
        textAlign: 'left',
    },
    cardContainer : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 32,
    },
});
export default Events;