import _ from 'lodash'

let defaultOpts = {
    currentVideo: null,
    previousSibling: null,
    showPrevNav: false,
    showNextNav: true,
    currentSlidePos: null       
}

export default class VideoCarouselState {
    constructor(options) {
        var self = this
        self = _.assign(this, defaultOpts, options)       
        this.subscriptions = []
        return self
    }

    update(options, self = this) {
        self = _.assign(self, options)   
        _.each(self.subscriptions, f => f())
    }

    subscribe(func) {
        this.subscriptions.push(func)
    }
}