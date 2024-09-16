
(function(){var maxMobileWidth=959;var boxVisibility={mobile:!0,desktop:!0,};var htmlBox=document.querySelector('#box2313001b-5b6e-0ea5-a9de-09a30a6a4bf1 .cvt-1568371626-element-body.cvt-1568371626-html-box');var width=document.documentElement.clientWidth;if((width<=maxMobileWidth&&!boxVisibility.mobile)||(width>maxMobileWidth&&!boxVisibility.desktop)){htmlBox.outerHTML=htmlBox.outerHTML.split(htmlBox.innerHTML).join('')}})()

let isOver64 = !1; let isUSA = !1; $(document).ready(function () {
    $(".q1-btn").on("click", function () {
        if ($(".q1-btn").text === "Yes") { isOver64 = !0 } else { isOver64 = !1 }
        $("#q1").fadeOut(500); $("#q2").delay(500).fadeIn(500)
    }); $(".q2-btn").on("click", function () {
        if ($(".q2-btn").text === "Yes") { isUSA = !0 } else { isUSA = !1 }
        waitingInfo()
    })
}); function waitingInfo() { q2.style.display = "none"; loading1.style.display = 'block'; loading1.classList.add('fade-in'); window.setTimeout(function () { loading1.classList.add('fade-out'); window.setTimeout(function () { loading1.style.display = 'none'; loading2.style.display = 'block'; loading2.classList.add('fade-in'); window.setTimeout(function () { loading2.classList.add('fade-out'); window.setTimeout(function () { loading2.style.display = 'none'; loading3.style.display = 'block'; loading3.classList.add('fade-in'); window.setTimeout(function () { loading3.classList.add('fade-out'); window.setTimeout(function () { loading3.style.display = 'none'; qualify.style.display = 'block'; qualify.classList.add('fade-in'); countdown() }, 250) }, 750) }, 250) }, 750) }, 250) }, 750) }
var interval; function countdown() { clearInterval(interval); interval = setInterval(function () { var timer = $('#countingItem').html(); timer = timer.split(':'); var minutes = timer[0]; var seconds = timer[1]; seconds -= 1; if (minutes < 0) return; else if (seconds < 0 && minutes != 0) { minutes -= 1; seconds = 59 } else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds; else if (minutes < 1) minutes = '00'; $('#countingItem').html(minutes + ':' + seconds); if (minutes == 0 && seconds == 0) clearInterval(interval); }, 1000) }


document.querySelector("[href*=tel]").addEventListener("click", function () { gtag('event', 'conversion', { 'send_to': 'AW-16510162206/jCVJCJaZ07cZEJ6q1MA9' }) })


var convertriLoadDeferredStyles = function () { var addStylesNode = document.getElementById('convertri-deferred-styles'); var replacement = document.createElement('div'); replacement.innerHTML = addStylesNode.textContent || addStylesNode.innerText; document.body.appendChild(replacement); var addStylesNodeParent = addStylesNode.parentElement || addStylesNode.parentNode; addStylesNodeParent.removeChild(addStylesNode) }; var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame; if (raf) { raf(function () { window.setTimeout(convertriLoadDeferredStyles, 0) }) } else { window.addEventListener('load', convertriLoadDeferredStyles) }

var _cvt_gsi = '031dde8d-246d-11ef-b426-065481b2b00f'

var needsJQuery = (function () {
        var jQueryLib = null; var handlers = []; function needsJQuery(handler) { if (jQueryLib) { handler(jQueryLib) } else { handlers.push(handler) } }
        needsJQuery.ready = function (handler) { var onDomReady = function () { handler(jQueryLib) }; needsJQuery(function ($) { $(onDomReady) }) }; needsJQuery.loaded = function (jQuery) { jQueryLib = jQuery; while (handlers.length) { handlers.shift()(jQueryLib) } }; return needsJQuery
    })()


needsJQuery.ready(function ($) { var wrapperSelector = '.page-section'; manageIframesState($(wrapperSelector)) }); function manageIframesState(root) {
    var boxSelector = uniqueSelector('.box'); var iframeSelector = uniqueSelector('.html-box iframe'); var iframes = root.find(iframeSelector); iframes.each(function () {
        var $iframe = $(this); var isVisible = $iframe.parents(boxSelector).is(':visible'); var src = $iframe.attr('data-src'); var notYetInitialized = !src; if (notYetInitialized) { src = $iframe.attr('src'); $iframe.attr('data-src', src); if (isVisible) { return } }
        $iframe.attr('src', isVisible ? src : '')
    })
}
var UrlUtils = UrlUtils || {}; UrlUtils.getURLParameters = function (url) {
    var paramsStr = url.split('?', 2); if (paramsStr.length < 2) return []; var params = [], search = /([^&=]+)=?([^&]*)/g, query = paramsStr[1]; while (match = search.exec(query)) { if (match.length >= 1) { params.push({ key: match[1], value: match[2], }) } }
    return params
}; UrlUtils.generateUrlWithParams = function (url, data) { if (!url) return ''; var params = [], urlObj = url.split('?', 1)[0]; data.forEach(function (dataItem) { params.push(dataItem.key + '=' + dataItem.value) }); return params.length ? urlObj + '?' + params.join('&') : url }; UrlUtils.getUrlWithoutAnchors = function (url) { var urlAndAnchor = url.split('#', 1); return urlAndAnchor[0] }; UrlUtils.getAnchorName = function (url) { var urlAndAnchor = url.split('#', 2); return urlAndAnchor.length > 1 ? '#' + urlAndAnchor[1] : '' }; UrlUtils.mergeUrlWithRequestParams = function (url) { var urlWithoutAnchors = UrlUtils.getUrlWithoutAnchors(url); var anchor = UrlUtils.getAnchorName(url); var urlParams = UrlUtils.getURLParameters(location.search); var localParameters = UrlUtils.getURLParameters(urlWithoutAnchors); localParameters = localParameters.concat(urlParams); var resultUrl = UrlUtils.generateUrlWithParams(urlWithoutAnchors, localParameters); return resultUrl + anchor }; UrlUtils.mergeUrlWithDynamicLinks = function (url) { const dynamicLinks = convertriParameters.dynamicLinks; const params = new URLSearchParams(location.search); dynamicLinks.forEach((link) => { const value = params.has(link.queryString) ? params.get(link.queryString) : link.default; url = url.replace(link.shortcode, encodeURIComponent(value)) }); return url }; needsJQuery.ready(function ($) {
    var DYNAMIC_TEXT_PARAMETER_NAME_ATTRIBUTE = 'data-cvt-url-parameter'; var DYNAMIC_TEXT_CONTAINER_SELECTOR = '[' + DYNAMIC_TEXT_PARAMETER_NAME_ATTRIBUTE + ']'; var DYNAMIC_TEXT_TEXT_SELECTOR = '.dynamic-text-highlight'; setDynamicTextValues(); function setDynamicTextValues() {
        var dynamicTextElements = $(DYNAMIC_TEXT_CONTAINER_SELECTOR); var queryStringParameters = QueryArgBag.getParams(); var i = 0; while (i < dynamicTextElements.length) {
            var $element = dynamicTextElements.eq(i); var parameterName = getDynamicTextParameterName($element); var parameterValue = queryStringParameters[parameterName]; if (!parameterName || parameterValue === undefined) { i++; continue }
            var $childTextElements = getContiguousBlockElements($element, parameterName); setContiguousBlockText($childTextElements, parameterValue); i += $childTextElements.length
        }
    }; function setContiguousBlockText($contiguousTextElements, parameterValue) {
        $contiguousTextElements.each(function (index, element) {
            var $element = $(element); var isLastElement = index === $contiguousTextElements.length - 1; if (isLastElement) { $element.text(parameterValue); return }
            var currentText = $element.text(); var parameterValuePart = parameterValue.substr(0, currentText.length); $element.text(parameterValuePart); parameterValue = parameterValue.slice(parameterValuePart.length)
        })
    }
    function getContiguousBlockElements($currentElement, parameterName) {
        var $result = getChildTextElement($currentElement); var $nextElement = $currentElement.next(DYNAMIC_TEXT_CONTAINER_SELECTOR); while ($nextElement.length && parameterName === getDynamicTextParameterName($nextElement.eq(0))) { $result = $result.add(getChildTextElement($nextElement)); $nextElement = $nextElement.next(DYNAMIC_TEXT_CONTAINER_SELECTOR) }
        return $result
    }
    function getChildTextElement($element) { return $element.find(DYNAMIC_TEXT_TEXT_SELECTOR) }
    function getDynamicTextParameterName($element) { return $element.attr(DYNAMIC_TEXT_PARAMETER_NAME_ATTRIBUTE) }
}); needsJQuery.ready(function ($) { var selector = [uniqueSelector('.box a[pass-params]'), uniqueSelector('.submenu a[pass-params]'), uniqueSelector('.mobile-menu a[pass-params]'),].join(','); $(selector).each(function (idx, el) { var url = $(el).attr('href'); if (!url) return; $(el).attr('href', UrlUtils.mergeUrlWithRequestParams(url)) }); const aSelector = [uniqueSelector('.box a'), uniqueSelector('.submenu a'), uniqueSelector('.mobile-menu a'),].join(','); $(aSelector).each(function (index, element) { const url = $(element).attr('href'); if (!url) return; $(element).attr('href', UrlUtils.mergeUrlWithDynamicLinks(url)) }) })

needsJQuery.ready(function ($) {
    function genericBehaviorHandler(desktopSelector, mobileSelector, boxHandler) { var selector = !MobileDetector.isMobile() ? desktopSelector : mobileSelector; var boxes = $(selector); boxes.each(function () { boxHandler($(this)) }) }
})

needsJQuery.ready(function ($) {
    var parentContainerSelector = '.main-page'; var elementBodySelector = '.cvt-1568371626-element-body'; var desktopContainers = { "box2a0131e1-8fe5-1131-3e4d-ab37c72732ed": [], "box8f5b6b62-c460-c9e3-cd73-730ca8420f42": [], "boxd03a7466-b378-210e-a518-e58cdfaead93": [], "box4014f454-7c25-c2b2-444c-e2f05c5806c8": ["box8f5b6b62-c460-c9e3-cd73-730ca8420f42"], "boxcce503c1-142a-eb0d-0b38-9ba70e60c222": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "box44b2c932-fe29-5929-446b-ddfd3d5e270e": [], "boxbdc2b096-0313-c355-e937-24af3772c7ba": [], "box20a94734-22b7-2307-dac0-59b1a57e60ba": [], "boxf23ba6dd-f39d-50a7-259b-ce483bfccfdb": [], "box702f6947-2975-7ed9-3539-a4d802020a3c": ["box8f5b6b62-c460-c9e3-cd73-730ca8420f42"], "box2313001b-5b6e-0ea5-a9de-09a30a6a4bf1": [], "box491298b0-09bd-9684-b871-be3a447199eb": [] }; var mobileContainers = { "box2a0131e1-8fe5-1131-3e4d-ab37c72732ed": [], "box8f5b6b62-c460-c9e3-cd73-730ca8420f42": [], "boxd03a7466-b378-210e-a518-e58cdfaead93": [], "box4014f454-7c25-c2b2-444c-e2f05c5806c8": ["box8f5b6b62-c460-c9e3-cd73-730ca8420f42"], "boxcce503c1-142a-eb0d-0b38-9ba70e60c222": [], "box44b2c932-fe29-5929-446b-ddfd3d5e270e": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "boxbdc2b096-0313-c355-e937-24af3772c7ba": [], "box20a94734-22b7-2307-dac0-59b1a57e60ba": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "boxf23ba6dd-f39d-50a7-259b-ce483bfccfdb": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "box702f6947-2975-7ed9-3539-a4d802020a3c": ["boxd03a7466-b378-210e-a518-e58cdfaead93"], "box2313001b-5b6e-0ea5-a9de-09a30a6a4bf1": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "box491298b0-09bd-9684-b871-be3a447199eb": [] }; var $elementBody = $(parentContainerSelector).find(elementBodySelector); $elementBody.on('mouseenter', function (event) { var containers = MobileDetector.isMobile() ? mobileContainers : desktopContainers; var id = findContainingId(event.currentTarget); addHover(containers, id) }); $elementBody.on('mouseleave', function (event) { var containers = MobileDetector.isMobile() ? mobileContainers : desktopContainers; var id = findContainingId(event.currentTarget); removeHover(containers, id) }); function addHover(containers, id) { $('#' + id + ' .cvt-1568371626-element-body, #' + id + ' .hoverable').addClass('hover'); var containerIds = containers[id]; for (var i = 0; i < containerIds.length; ++i) { addHover(containers, containerIds[i]) } }
    function removeHover(containers, id) { $('#' + id + ' .cvt-1568371626-element-body, #' + id + ' .hoverable').removeClass('hover'); var containerIds = containers[id]; for (var i = 0; i < containerIds.length; ++i) { addHover(containers, containerIds[i]) } }
    function findContainingId(element) {
        element = element.parentElement; while (!element.id && element.parentElement) { element = element.parentElement }
        return element.id
    }
})


needsJQuery.ready(function ($) {
    var parentContainerSelector = ''; var elementBodySelector = '.cvt-1568371626-element-body'; var desktopContainers = { "box2a0131e1-8fe5-1131-3e4d-ab37c72732ed": [], "box8f5b6b62-c460-c9e3-cd73-730ca8420f42": [], "boxd03a7466-b378-210e-a518-e58cdfaead93": [], "box4014f454-7c25-c2b2-444c-e2f05c5806c8": ["box8f5b6b62-c460-c9e3-cd73-730ca8420f42"], "boxcce503c1-142a-eb0d-0b38-9ba70e60c222": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "box44b2c932-fe29-5929-446b-ddfd3d5e270e": [], "boxbdc2b096-0313-c355-e937-24af3772c7ba": [], "box20a94734-22b7-2307-dac0-59b1a57e60ba": [], "boxf23ba6dd-f39d-50a7-259b-ce483bfccfdb": [], "box702f6947-2975-7ed9-3539-a4d802020a3c": ["box8f5b6b62-c460-c9e3-cd73-730ca8420f42"], "box2313001b-5b6e-0ea5-a9de-09a30a6a4bf1": [], "box491298b0-09bd-9684-b871-be3a447199eb": [] }; var mobileContainers = { "box2a0131e1-8fe5-1131-3e4d-ab37c72732ed": [], "box8f5b6b62-c460-c9e3-cd73-730ca8420f42": [], "boxd03a7466-b378-210e-a518-e58cdfaead93": [], "box4014f454-7c25-c2b2-444c-e2f05c5806c8": ["box8f5b6b62-c460-c9e3-cd73-730ca8420f42"], "boxcce503c1-142a-eb0d-0b38-9ba70e60c222": [], "box44b2c932-fe29-5929-446b-ddfd3d5e270e": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "boxbdc2b096-0313-c355-e937-24af3772c7ba": [], "box20a94734-22b7-2307-dac0-59b1a57e60ba": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "boxf23ba6dd-f39d-50a7-259b-ce483bfccfdb": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "box702f6947-2975-7ed9-3539-a4d802020a3c": ["boxd03a7466-b378-210e-a518-e58cdfaead93"], "box2313001b-5b6e-0ea5-a9de-09a30a6a4bf1": ["box2a0131e1-8fe5-1131-3e4d-ab37c72732ed"], "box491298b0-09bd-9684-b871-be3a447199eb": [] }; var $elementBody = $(parentContainerSelector).find(elementBodySelector); $elementBody.on('mouseenter', function (event) { var containers = MobileDetector.isMobile() ? mobileContainers : desktopContainers; var id = findContainingId(event.currentTarget); addHover(containers, id) }); $elementBody.on('mouseleave', function (event) { var containers = MobileDetector.isMobile() ? mobileContainers : desktopContainers; var id = findContainingId(event.currentTarget); removeHover(containers, id) }); function addHover(containers, id) { $('#' + id + ' .cvt-1568371626-element-body, #' + id + ' .hoverable').addClass('hover'); var containerIds = containers[id]; for (var i = 0; i < containerIds.length; ++i) { addHover(containers, containerIds[i]) } }
    function removeHover(containers, id) { $('#' + id + ' .cvt-1568371626-element-body, #' + id + ' .hoverable').removeClass('hover'); var containerIds = containers[id]; for (var i = 0; i < containerIds.length; ++i) { addHover(containers, containerIds[i]) } }
    function findContainingId(element) {
        element = element.parentElement; while (!element.id && element.parentElement) { element = element.parentElement }
        return element.id
    }
})

document.addEventListener("DOMContentLoaded", function () { yall() })