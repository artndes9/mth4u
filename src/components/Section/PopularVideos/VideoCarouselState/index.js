import _ from 'lodash'

export default class VideoCarouselState {
    constructor(currentVideo, previousSibling) {
        this.currentVideo = currentVideo
        this.previousSibling = previousSibling
        this.showPrevNav = false
        this.showNextNav = true
        this.subscriptions = []
    }

    update(currentVideoId, previousSiblingId, showPrevNav, showNextNav) {
        this.currentVideo = currentVideoId
        this.previousSibling = previousSiblingId
        this.showPrevNav = showPrevNav
        this.showNextNav = showNextNav
        _.each(this.subscriptions, f => f())
    }

    subscribe(func) {
        this.subscriptions.push(func)
    }
}