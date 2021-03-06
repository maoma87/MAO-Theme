const Color = require("color")
const colors = require("./common-colors")

colors.principal = Color.rgb(37, 37, 37)
colors.principal_0 = Color.rgb(45, 45, 45)
colors.principal_1 = Color.rgb(55, 55, 55)
colors.principal_2 = Color.rgb(69, 69, 69)
colors.principal_3 = Color.rgb(89, 89, 89)
colors.principal_4 = Color.rgb(117, 117, 117)
colors.principal_5 = Color.rgb(155, 155, 155)

colors.text = Color.rgb(206, 206, 206)

colors.selection = colors.principal_2
colors.selectionHighlight = colors.principal_1
colors.selectionInactive = colors.principal_2
colors.hoverHiglight = colors.principal_1
colors.wordHighlightStrong = colors.principal_1
colors.findMatch = colors.principal_3
colors.findHighlight = colors.principal_1
colors.rangeHiglight = colors.principal_2
colors.lineHiglight = colors.principal_0

colors.gitInsertedBg = Color.rgb(5, 20, 5)
colors.gitRemovedBg = Color.rgb(20, 0, 0)
colors.gitIgnoreExplorer = colors.principal.lighten(1.5)

//INTERFACE COLORS
colors.interBackground = colors.principal
colors.interBorder = colors.principal_1
colors.notificationBadge = colors.white

// SYNTAX COLORS
colors.variable = colors.syntaxYellow
colors.variableProperty = colors.text
colors.contrastText = colors.syntaxRed
colors.variableInstance = colors.syntaxOrange
colors.specialWordA = colors.syntaxBlue
colors.specialWordB = colors.syntaxViolet
colors.specialWordC = colors.syntaxPurple
colors.functionName = colors.syntaxCyan
colors.string = colors.syntaxGreen
colors.operator = colors.contrastText
colors.regularText = colors.text
colors.number = colors.syntaxOrange
colors.boolean = colors.contrastText
colors.nullUnd = colors.contrastText
colors.punctuation = colors.regularText
colors.deprecated = colors.danger
colors.comment = Color.rgb(100, 120, 130)

// Markup
colors.htmlTag = colors.contrastText
colors.metaTag = colors.text
colors.tagAttribute = colors.specialWordB
colors.pugClass = colors.variable

// Stylesheets
colors.cssAttribute = colors.syntaxGreen
colors.cssValue = colors.syntaxOrange
colors.cssTag = colors.syntaxRed
colors.cssClass = colors.syntaxYellow
colors.cssId = colors.syntaxBlue
colors.cssProperty = colors.syntaxCyan
colors.cssUnits = colors.number
colors.cssSpecialWord = colors.syntaxViolet
colors.cssPseudoClass = colors.syntaxPurple
colors.sassFunction = colors.syntaxBlue
colors.sassInterpolation = colors.syntaxRed

module.exports = colors