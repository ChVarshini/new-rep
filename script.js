function predict() {
    var attendance = parseFloat(document.getElementById('attendance').value);
    var assignments = parseFloat(document.getElementById('assignments').value);
    var exams = parseFloat(document.getElementById('exams').value);

    var prediction = (attendance + assignments + exams) / 3 > 60 ? 'Pass' : 'Fail';

    document.getElementById('result').innerHTML = 'Predicted Result: ' + prediction;
}
