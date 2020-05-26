
let socket = io();

// ~~~~~~~~~~~~~~ // Run on Load // ~~~~~~~~~~~~~~ //
$(function () {

    let inputTags = $("#inputTags");
    inputTags.change(function(){
        let tagNames = '- ';
        $(this).find(":selected").each(function(){
            tagNames += $(this).text()+' ';
        });
        $("#selectedTraits").html(tagNames);
    });


    $("#createButton").click(function(){
        $(this).unbind();
        finishSpell(false);
    });

});

function finishSpell(isUpdate){

    let spellName = $("#inputName").val();
    let spellVersion = $("#inputVersion").val();
    let spellIsFocus = ($("#inputIsFocusSpell:checked").val() == '1') ? 1 : 0;
    let spellLevel = $("#inputLevel").val();
    let spellRarity = $("#inputRarity").val();
    let spellTraditions = $("#inputTraditions").val();
    let spellCasting = $("#inputCasting").val();
    let spellComponents = $("#inputCastingComponents").val();
    let spellCost = $("#inputCost").val();
    let spellTrigger = $("#inputTrigger").val(); 
    let spellRequirements = $("#inputRequirements").val();
    let spellTagsArray = $("#inputTags").val();
    let spellRange = $("#inputRange").val();
    let spellArea = $("#inputArea").val();
    let spellTargets = $("#inputTargets").val();
    let spellSavingThrow = $("#inputSavingThrow").val();
    let spellDuration = $("#inputDuration").val();
    let spellDesc = $("#inputDesc").val();
    let spellHeightenedOneVal = $("#inputHeightenedOneVal").val();
    let spellHeightenedOneText = $("#inputHeightenedOneText").val();
    let spellHeightenedTwoVal = $("#inputHeightenedTwoVal").val();
    let spellHeightenedTwoText = $("#inputHeightenedTwoText").val();
    let spellHeightenedThreeVal = $("#inputHeightenedThreeVal").val();
    let spellHeightenedThreeText = $("#inputHeightenedThreeText").val();
    
    let requestPacket = null;
    let spellID = null;
    if(isUpdate){
        requestPacket = "requestAdminUpdateSpell";
        spellID = getSpellEditorIDFromURL();
    } else {
        requestPacket = "requestAdminAddSpell";
    }

    socket.emit(requestPacket,{
        spellID,
        spellName,
        spellVersion,
        spellIsFocus,
        spellLevel,
        spellRarity,
        spellTraditions,
        spellCasting,
        spellComponents,
        spellCost,
        spellTrigger,
        spellRequirements,
        spellTagsArray,
        spellRange,
        spellArea,
        spellTargets,
        spellSavingThrow,
        spellDuration,
        spellDesc,
        spellHeightenedOneVal,
        spellHeightenedOneText,
        spellHeightenedTwoVal,
        spellHeightenedTwoText,
        spellHeightenedThreeVal,
        spellHeightenedThreeText
    });

}

socket.on("returnAdminCompleteSpell", function() {
    window.location.href = '/admin/manage/spell';
});