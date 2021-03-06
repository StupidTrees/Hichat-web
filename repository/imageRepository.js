const models = require('../database/models')
const tools = require('../utils/tools')
const {equals} = require("../utils/textUtils");
const Op = models.Op

/**
 * 仓库层：对话表数据读写
 */
const ImageTable = models.ImageTable
const FaceTable = models.FacesTable
const ImageFaceTable = models.ImageFaceTable

/**
 * 将图片记录保存
 */
exports.saveImage = function (fromId, toId, filename, sensitive) {
    return ImageTable.create({
        fromId: fromId,
        toId: toId,
        fileName: filename,
        sensitive: sensitive
    })
}

/**
 * 根据图片id获取图片对象
 */
exports.getImageById = function (imageId) {
    return ImageTable.findByPk(imageId)
}

/**
 * 根据图片id获取图片文件名
 */
exports.getImageFilenameById = function (imageId) {
    return ImageTable.findByPk(
        imageId, {
            attributes: ['fileName']
        }
    )
}


/**
 * 更新图片的分类结果
 * @param imageId
 * @param imageClass
 */
exports.updateSceneById = function (imageId, imageClass) {
    return ImageTable.update({
        "scene": imageClass
    }, {
        where: {
            "id": imageId
        }
    })
}


exports.saveFaceInImage = function (imageId, userId, confidence) {
    return ImageFaceTable.create(
        {
            imageId: imageId,
            userId: userId,
            confidence: confidence
        }
    )
}


exports.getFaces = function (userId) {
    return FaceTable.findAll({
        attributes: ['id', 'userId'],
        where: {
            userId: userId
        }
    })
}

/**
 * 获取某人脸entity的文件名
 * @param userId
 * @param faceId
 */
exports.getFaceFilenameById = function (userId, faceId) {
    return FaceTable.findByPk(faceId, {
        attributes: ['pic_name'],
        where: {
            userId: userId
        }
    })
}


exports.deleteFace = function (userId, faceId) {
    return FaceTable.destroy({
        where: {
            [Op.and]: [
                {
                    userId: userId
                },
                {
                    id: faceId
                }
            ]
        }
    })
}
