class YoutubeChannel {
    constructor() {
        this.videoTitle = "";
        this.subscribers = [];
    }

    placeNewVideo(title) {
        this.videoTitle = title;
        //notify all subscibers
        this.notifyAll();
    }

    notifyAll() {
        return this.subscribers.forEach(sub => sub.update(this));
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unSubscribe(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub != subscriber);
    }
}

class IndividualPerson {
    update(YoutubeChannel) {
        console.log(`New Video Uploaded ${YoutubeChannel.videoTitle}`);
    }
}

class BusinessChannel {
    update(YoutubeChannel) {
        console.log(`New Video Uploaded ${YoutubeChannel.videoTitle}`);
    }
}


const heroProgrammer = new YoutubeChannel();

heroProgrammer.placeNewVideo("Test video");

const Ahmed = new IndividualPerson();
heroProgrammer.subscribe(Ahmed);

heroProgrammer.placeNewVideo("JS DP Part 1");

const Nada = new IndividualPerson();
heroProgrammer.subscribe(Nada);

heroProgrammer.placeNewVideo("JS DP Part 2");