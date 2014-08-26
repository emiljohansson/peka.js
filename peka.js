/**
 * Adding simple touch support for mobile/tablet devices.
 *
 * @author Emil Johansson <emiljohansson.se@gmail.com>
 */
(function(window, document, undefined) {

    /**
     * ...
     *
     * @param DOMElement elem
     */
    function Peka(elem) {
        if (typeof window.bowser === 'undefined') {
            throw 'peka.js is requires the Bowser library. window.bowser was undefined';
        }
        this._elem = elem;
    }

    Peka.prototype.tap = function(listener) {
        if (bowser.mobile === true ||bowser.tablet === true) {
            this._elem.addEventListener('touchend', listener);
        }
        else {
            this._elem.addEventListener('click', listener);
        }
    }

    window.Peka = Peka;
}(window, document));
