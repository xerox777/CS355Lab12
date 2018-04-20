/**
 * Created by student on 4/17/18.
 */
var express = require('express');
var router = express.Router();
var resume_dal = require('../dal/resume_dal');

router.get('/all', function(req, res, next){
    resume_dal.getAll(function(err, result) {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(result);
            res.render('resume/resume_view_all', {resume: result});
        }
    })
});

router.get('/edit', function(req, res) {
    resume_dal.getAll(function(err, result) {
        res.render('resume/resume_update',
            {resume: result});

    });
});

router.get('/add/selectuser', function(req, res) {
    resume_dal.getAll(function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.render('resume/resume_add_user', {resume: result});
        }
    });
});

router.get('/add/user', function(req, res) {
    resume_dal.select(req.query, function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, 'resume/all');
        }
    });
});


router.get('/add', function(req, res) {
    resume_dal.getacAll(function(err, result) {
        if (err) {
            res.send(err);
        }
        else {
            resume_dal.getAll(function(err, resume){
            res.render('resume/resume_add', {resume: result, resumeINFO: resume});
        });
        }
    });
});

router.get('/insert', function(req, res) {
    resume_dal.insert(req.query, function(err, result) {
        if(err){
            console.log(err);
            res.send(err);
        } else {
            res.redirect(302, '/resume/all');//, {Ecorp: result});
        }
    });
});

router.get('/update', function(req, res){
    resume_dal.update(req.query, function(err, result){
        if(err){
            res.send(err);
        } else {
            res.redirect(302, '/resume/all');
        }
    });

});

router.get('/delete', function(req, res){
        resume_dal.delete(req.query, function(err, result){
            if(err){
                res.send(err);
            }
            else {
                res.redirect(302, '/resume/all');
            }
        });
});

module.exports = router;